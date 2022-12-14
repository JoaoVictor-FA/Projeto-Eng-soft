from http import HTTPStatus
from flask import Flask, abort
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    
    # secret key de dev
    app.secret_key = 'dev'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
    
    db.init_app(app)
    
    login_manager = LoginManager()
    login_manager.login_view = '/Login'
    login_manager.init_app(app)
    
    from .models import Usuario, Aluno, Professor
    
    @login_manager.user_loader
    def load_user(user_id):
        if Usuario.query.get(int(user_id)).type == 'professor':
            return Professor.query.get(int(user_id))
        
        return Aluno.query.get(int(user_id))
    
    @login_manager.unauthorized_handler
    def unauthorized():
        abort(HTTPStatus.UNAUTHORIZED)
    
    with app.app_context(): 
        db.create_all()
    
    # blueprint de autenticacao
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)
    
    # blueprint das rotas de usuario
    from .usuario import usuario as usuario_blueprint
    app.register_blueprint(usuario_blueprint)
    
    return app