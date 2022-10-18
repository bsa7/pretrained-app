''' Production server '''

from flask import Flask
from flask_cors import CORS
from waitress import serve
from routes import Router

wsgiapp = Flask(__name__)
CORS(wsgiapp)

router = Router(wsgiapp)

serve(wsgiapp, host = '0.0.0.0', port = '5000', url_scheme = 'https')
