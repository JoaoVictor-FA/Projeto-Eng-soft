from flask import Blueprint
from flask_restful import Api, Resource, reqparse
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from .models import Usuario

auth = Blueprint('auth', __name__)
api = Api(auth)

def email(email_str: str):
    if email_str.find('@') != -1:
        if (Usuario.query.filter_by(email=email_str).first()): # checa se já existe na db
            raise ValueError(f'{email_str} já foi registrado')
        else:
            return email_str
    else:
        raise ValueError(f'{email_str} não é um email válido')

class Login(Resource):
    def get(self):
        return 'Login'
    
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

class Registrar(Resource):
    def post(self):
        args = rParser.parse_args()
        
        usuario = Usuario(email=args.email, nome=args.nome, password=generate_password_hash(args.password, method='sha256'))
        
        db.session.add(usuario)
        db.session.commit()
        
        return 'Usuário Cadastrado'
    
api.add_resource(Registrar, '/registrar')

class Logout(Resource):
    def get(self):
        return 'Logout'
    
api.add_resource(Logout, '/logout')