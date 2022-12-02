import datetime
from http import HTTPStatus
import random
import string
from flask import Blueprint, abort
from flask_login import current_user, login_required
from flask_restful import Api, Resource, reqparse
from . import db
from .models import Atividade

usuario = Blueprint('usuario', __name__)
api = Api(usuario)

# gera codigo de 6 caracteres formado por letras maiusculas e numeros para Atividade
def geraCodigo(size = 6, chars = string.ascii_uppercase + string.digits):
    codigo = ''.join(random.choice(chars) for _ in range(size))
    
    if Atividade.query.filter_by(codigoAcesso=codigo).first():
        return geraCodigo()
    
    return codigo

atvParser = reqparse.RequestParser()
atvParser.add_argument( # nome
    'nome', dest='nome', type=str,
    location='form', required=True,
    help='Nome da atividade'
)

atvParser.add_argument( # data limite // deve ser uma string no formato Date().toUTCString()
    'data', dest='dataLimite', type=str,
    location='form', required=True,
    help='Data limite da atividade'
)

atvParser.add_argument( # descricao
    'descricao', dest='descricao', type=str,
    location='form', required=True,
    help='Descrição da atividade'
)

atvParser.add_argument( # complexidade
    'complexidade', dest='complexidade', type=str,
    location='form', required=True,
    help='Complexidade do algoritimo de plagio da atividade'
)

class CriaAtividade(Resource):
    @login_required
    def post(self):
        if (current_user.type != 'professor'):
            abort(HTTPStatus.UNAUTHORIZED)
        
        args = atvParser.parse_args()
        dataLimite = datetime.datetime.strptime(args.dataLimite, "%a, %d %b %Y %H:%M:%S %Z")
        
        atividade = Atividade(nome=args.nome, dataLimite=dataLimite, descricao=args.descricao, codigoAcesso=geraCodigo(), complexidade=args.complexidade)
        
        current_user.atividades.append(atividade)
        db.session.commit()
        
        return 'Atividade criada com sucesso.'
    
api.add_resource(CriaAtividade, '/usuario/atividade')

codigoParser = reqparse.RequestParser()
codigoParser.add_argument( # codigo
    'codigo', dest='codigo', type=str,
    location='form', required=True,
    help='Código de Acesso da atividade'
)

class InscreveAtividade(Resource):
    @login_required
    def post(self):
        if (current_user.type != 'aluno'):
            abort(HTTPStatus.UNAUTHORIZED)
    
        args = codigoParser.parse_args()
        
        atividade = Atividade.query.filter_by(codigoAcesso=args.codigo).first()
        
        if not atividade:
            raise ValueError('Uma atividade com esse código não foi encontrada')
        
        current_user.tarefas.append(atividade)
        db.session.commit()
    
        return 'Inscrição realizada com sucesso.'
        
api.add_resource(InscreveAtividade, '/usuario/inscrever')