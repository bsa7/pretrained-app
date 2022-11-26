''' Initialize application '''

import logging
import os
import re
from flask import Flask
from flask_cors import CORS
from monkeypatches.monkeypatched_mvc_flask import MonkeypatchedFlaskMVC
from config.initializers.logger import initialize_log
from config.initializers.i18n import I18n

class Application:
  '''This is main application part'''
  def __init__(self):
    self.__name = __name__
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
    self.__setup_app_variables()
    MonkeypatchedFlaskMVC(self.app, path = 'app')
    CORS(self.app)

  def __setup_app_variables(self):
    ''' Set up a some app variables '''
    self.app.config['EXPLAIN_TEMPLATE_LOADING'] = True
    I18n(self.root_path)

  @property
  def app(self):
    '''Return app'''
    return self.__app

  @property
  def root_path(self):
    ''' Returns API root absolute path '''
    # return Path(__file__).parent.resolve()
    print(f'{self.fix_pathname(os.path.abspath(__file__ + "/../../"))=}')
    return self.fix_pathname(os.path.abspath(__file__ + "/../../"))

  @property
  def template_folder(self):
    ''' Returns application template folder path '''
    return 'app/views'

  @property
  def assets_folder(self):
    ''' Return application assets path for css/js files '''
    return 'app/assets'

  def fix_pathname(self, pathname: str) -> str:
    ''' Fix pathname returned by os.path.dirname on ci - "/pretrained-app/api/./config/config/locales" '''
    return re.sub(r'\/\.\/', '/', pathname)
