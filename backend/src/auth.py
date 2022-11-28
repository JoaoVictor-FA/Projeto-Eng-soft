from flask import Blueprint
from flask_restful import Api, Resource
from . import db

auth = Blueprint('auth', __name__)
api = Api(auth)

class Login(Resource):
    def get(self):
        return 'Login'
    
api.add_resource(Login, '/login')

class Registrar(Resource):
    def get(self):
        return 'Registrar'
    
api.add_resource(Registrar, '/registrar')

class Logout(Resource):
    def get(self):
        return 'Logout'
    
api.add_resource(Logout, '/logout')