''' Initialize application '''

from flask import Flask
from monkeypatches.monkeypatched_mvc_flask import MonkeypatchedFlaskMVC
from config.initializers.logger import initialize_log

class Application:
  '''This is main application part'''
  def __init__(self, name):
    self.__name = name
    self.__app = Flask(self.__name, template_folder = './app/views')
    self.app.config['EXPLAIN_TEMPLATE_LOADING'] = True
    self.initialize_core()
    initialize_log()

  def initialize_core(self):
    '''Initializes mvc flask app'''
    MonkeypatchedFlaskMVC(self.app, path = 'app')

  @property
  def app(self):
    '''Return app'''
    return self.__app
