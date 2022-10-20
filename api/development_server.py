''' Development server '''

from flask import Flask
from mvc_flask import FlaskMVC
from flask_cors import CORS

app = Flask(__name__)
mvc_app = FlaskMVC()
mvc_app.init_app(app, path = 'app')

CORS(app)

if __name__ == "__main__":
  app.run(host = '0.0.0.0', debug = True)
