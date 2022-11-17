''' Initialize api logger '''

import os
import logging

def initialize_log():
  ''' initialize api logger '''

  environment_name = os.getenv('FLASK_ENV')
  environment_name = environment_name if environment_name else 'development'
  print(f'{environment_name=}')
  logging.basicConfig(filename = f'log/{environment_name}.log', level = logging.INFO)
