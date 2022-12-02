import datetime
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
            "tarefa": item()
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
    atividades = db.relationship("Atividade", lazy="joined")
    __mapper_args__ = {'polymorphic_identity': 'professor'}
    
    def __call__(self):
        return {
            "data": {
                "nome": self.nome,
                "email": self.email,
                "tipo": self.type,
                "atividades": [item() for item in self.atividades]
            }
        }

class Atividade(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    autor_id = db.Column(db.ForeignKey(Professor.id))
    nome = db.Column(db.String(100))
    dataAbertura = db.Column(db.DateTime(), default=datetime.datetime.now())
    dataLimite = db.Column(db.DateTime())
    descricao = db.Column(db.String(100000))
    # respostas // ainda precisa ser feito pq ainda nao tem o Modelo do arquivo
    codigoAcesso = db.Column(db.String(6))
    alunos = db.relationship("Aluno", back_populates="tarefas", secondary=association_table, lazy="joined")
    complexidade = db.Column(db.String(10))
    
    def __call__(self):
        return {
            "data": {
                "nome": self.nome,
                "data de abertura": self.dataAbertura.strftime("%d/%m/%Y, %H:%M:%S"),
                "data limite": self.dataLimite.strftime("%d/%m/%Y, %H:%M:%S"),
                "descricao": self.descricao,
                # respostas // ainda precisa ser feito pq ainda nao tem o Modelo do arquivo
                "codigo de acesso": self.codigoAcesso,
                "alunos": [{"nome": item.nome, "email": item.email} for item in self.alunos],
                "complexidade": self.complexidade
            }
        }