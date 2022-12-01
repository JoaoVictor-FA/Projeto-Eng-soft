from flask_login import UserMixin
from . import db

class Usuario(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    type = db.Column(db.String(32), nullable=False)
    
    __mapper_args__ = {
        "polymorphic_identity": "usuario",
        "polymorphic_on": "type",
    }
    
    def __call__(self):
        return {
            "data": {
                "nome": self.nome,
                "email": self.email,
            }
        }
        
class Professor(Usuario):
    id = db.Column(db.ForeignKey("usuario.id"), primary_key=True)
    #tarefas = db.Column()
    __mapper_args__ = {'polymorphic_identity': 'aluno'}