from flask import Flask
from flask_cors import CORS
from config.routes import Router

app = Flask(__name__) # TODO - add yaml configuration
CORS(app)

router = Router(app)

if __name__ == "__main__":
  app.run(host = '0.0.0.0', debug = True)
