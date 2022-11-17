''' Initialize application '''

from flask import Flask
from mvc_flask import FlaskMVC
from flask_cors import CORS
from config.initializers.logger import initialize_log

class Application:
  '''This is main application part'''
  def __init__(self, name):
    self.__name = name
    initialize_log()
    self.initialize_core()

  def initialize_core(self):
    '''Initializes mvc flask app'''
    self.__app = Flask(self.__name)
    mvc_app = FlaskMVC()
    mvc_app.init_app(self.app(), path = 'app')
    CORS(self.app())

  def app(self):
    '''Return app'''
    return self.__app
