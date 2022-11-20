''' Initialize api logger '''

import os
import logging

def initialize_log():
  ''' initialize api logger '''
  environment_name = os.getenv('API_ENV')
  if environment_name is None:
    raise ValueError('You must define environment variable API_ENV. See the README.md, please')
  print(f'{environment_name=}')
  logging.basicConfig(filename = f'log/{environment_name}.log', level = logging.INFO)
