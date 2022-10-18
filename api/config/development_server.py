''' Development server '''

from flask import Flask
from flask_cors import CORS
from routes import Router

app = Flask(__name__)
CORS(app)

router = Router(app)

if __name__ == "__main__":
  app.run(host = '0.0.0.0', debug = True)
