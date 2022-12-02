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
        
        
association_table = db.Table( #tabela de asssociação necessária para relação many-to-many aluno/atividade https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html#many-to-many
    "association_table",
    db.Column("aluno_id", db.ForeignKey("aluno.id"), primary_key=True),
    db.Column("atividade_id", db.ForeignKey("atividade.id"), primary_key=True),
    db.Column("status", db.String(32), nullable=False, default='Pendente')
)        

class Aluno(Usuario):
    id = db.Column(db.ForeignKey(Usuario.id), primary_key=True)
    tarefas = db.relationship("Atividade", back_populates="alunos", secondary=association_table, lazy="joined")
    __mapper_args__ = {'polymorphic_identity': 'aluno'}
    
    def __tarefaMapping(self, index, item):
        status = db.session.query(association_table).filter_by(aluno_id=self.id)[index].status # meio q gambiarra
    
        return {
            "status": status,
            "tarefa": {
                "id": item.id
            }
        }
    
    def __call__(self):
        return {
            "data": {
                "nome": self.nome,
                "email": self.email,
                "tipo": self.type,
                "tarefas": [self.__tarefaMapping(i, x) for i,x in enumerate(self.tarefas)]
            }
        }
        
class Professor(Usuario):
    id = db.Column(db.ForeignKey(Usuario.id), primary_key=True)
    atividades = db.relationship("Atividade", back_populates="autor", cascade='all, delete-orphan', lazy="joined")
    __mapper_args__ = {'polymorphic_identity': 'professor'}
    
    def __call__(self):
        return {
            "data": {
                "nome": self.nome,
                "email": self.email,
                "tipo": self.type,
                "atividades": [{
                        "id": item.id
                    } for item in self.atividades]
            }
        }
    
    
class Atividade(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    autor_id = db.Column(db.ForeignKey(Professor.id))
    autor = db.relationship("Professor", back_populates="atividades", uselist=False)
    alunos = db.relationship("Aluno", back_populates="tarefas", secondary=association_table, lazy="joined")