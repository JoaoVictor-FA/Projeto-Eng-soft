from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"data":"Hello Bitchessss"}

api.add_resource(HelloWorld, "/hellobitches")

if __name__ == "__main__":
    app.run(debug=True)