from flask_login import UserMixin
from sqlalchemy import ForeignKey
from . import db

class Usuario(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    type = db.Column(db.String(100), nullable=False)

    __mapper_args__ = {
        "polymorphic_identity": "usuario",
        "polymorphic_on": "type",
    }

class Aluno(Usuario):
    __tablename__ = "aluno"
    id = db.Column(db.ForeignKey('usuario.id'), primary_key=True)
    tarefas = db.relationship("Tarefas")
    status = db.relationship("Status")

    __mapper_args__ = {
        "polymorphic_identity": "aluno",
    }
