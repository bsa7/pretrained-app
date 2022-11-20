''' Production server '''

from waitress import serve
from config.application import Application

app = Application(__name__).app
serve(app, host = '0.0.0.0', port = '5000', url_scheme = 'https')
