''' Production server '''

from flask import Flask
from flask_cors import CORS
from mvc_flask import FlaskMVC
from waitress import serve

wsgiapp = Flask(__name__)
mvc_app = FlaskMVC()
mvc_app.init_app(wsgiapp, path = 'app')
CORS(wsgiapp)

serve(wsgiapp, host = '0.0.0.0', port = '5000', url_scheme = 'https')
