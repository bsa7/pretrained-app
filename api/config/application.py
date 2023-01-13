''' Initialize application '''

import logging
from pathlib import Path
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from monkeypatches.monkeypatched_mvc_flask import MonkeypatchedFlaskMVC
from config.initializers.logger import initialize_log

class Application:
  '''This is main application part'''
  def __init__(self, name):
    self.__name = name
    initialize_log()
    logging.info(f'Application root path: {self.root_path=}')
    logging.info(f'Application template folder: {self.template_folder=}')
    logging.info(f'Application assets folder: {self.assets_folder=}')
    self.__app = Flask(self.__name,
                       template_folder = self.template_folder,
                       root_path = self.root_path,
                       static_folder = self.assets_folder)
    self.initialize_core()

  def initialize_core(self):
    '''Initializes mvc flask app'''
    self.app.config['EXPLAIN_TEMPLATE_LOADING'] = True
    load_dotenv()
    MonkeypatchedFlaskMVC(self.app, path = 'app')
    CORS(self.app)

  @property
  def app(self):
    '''Return app'''
    return self.__app

  @property
  def root_path(self):
    ''' Returns API root absolute path '''
    return Path(__file__).parent.parent.resolve()

  @property
  def template_folder(self):
    ''' Returns application template folder path '''
    return 'app/views'

  @property
  def assets_folder(self):
    ''' Return application assets path for css/js files '''
    return 'app/assets'
