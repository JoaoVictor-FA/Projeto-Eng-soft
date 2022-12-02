from flask import Blueprint
from flask_login import current_user, login_required, login_user, logout_user
from flask_restful import Api, Resource, reqparse
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from .models import Aluno, Professor, Usuario

auth = Blueprint('auth', __name__)
api = Api(auth)

def email(email_str: str):
    if email_str.find('@') != -1:
        return email_str
    else:
        raise ValueError(f'{email_str} não é um email válido')


# configuração do parser de login
lParser = reqparse.RequestParser()
lParser.add_argument( # email
    'email', dest='email', type=email,
    location='form', required=True,
)

lParser.add_argument( # senha
    'password', dest='password',
    location='form', required=True,
    help='Senha do usuário'
)

class Login(Resource):
    def post(self):
        args = lParser.parse_args()
        
        usuario = Usuario.query.filter_by(email=args.email).first()
        
        if not usuario or not check_password_hash(usuario.password, args.password):
            raise ValueError('Uma ou mais credenciais estão incorretas')
        
        login_user(usuario)
        return "Usuário Logado"
    
api.add_resource(Login, '/login')


# configuração do parser de registro
rParser = reqparse.RequestParser()
rParser.add_argument( # nome
    'nome', dest='nome',
    location='form', required=True,
    help='Nome do usuário'
)

rParser.add_argument( # email
    'email', dest='email', type=email,
    location='form', required=True,
)

rParser.add_argument( # senha
    'password', dest='password',
    location='form', required=True,
    help='Senha do usuário'
)

rParser.add_argument( # tipo
    'type', dest='type',
    location='form', required=True,
    help='Tipo de usuário (\'professor\' ou \'aluno\''
)

class Registrar(Resource):
    def post(self):
        args = rParser.parse_args()
        
        if (Usuario.query.filter_by(email=args.email).first()): # checa se já existe na db
            raise ValueError(f'{args.email} já foi registrado')
        
        if (args.type == 'professor'):
            usuario = Professor(email=args.email, nome=args.nome, password=generate_password_hash(args.password, method='sha256'))
        elif (args.type == 'aluno'):
            usuario = Aluno(email=args.email, nome=args.nome, password=generate_password_hash(args.password, method='sha256'))
        
        db.session.add(usuario)
        db.session.commit()
        
        return 'Usuário Cadastrado'
    
api.add_resource(Registrar, '/registrar')

class Logout(Resource):
    @login_required
    def get(self):
        logout_user()
        return 'Usuário Deslogado'
    
api.add_resource(Logout, '/logout')

class Perfil(Resource):
    @login_required
    def get(self):
        return current_user()
    
api.add_resource(Perfil, '/perfil')