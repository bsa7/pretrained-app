''' Router methods '''

import re
from mvc_flask import Router

API_ROOT = '/'

def get(location: str, endpoint: str) -> None:
  '''Decorates mvc_flask.Router GET method to simplificate calls in routes config file'''
  Router.get(__pathname(f'{API_ROOT}{location}'), endpoint)

def post(location: str, endpoint: str) -> None:
  '''Decorates mvc_flask.Router POST method to simplificate calls in routes config file'''
  Router.post(__pathname(f'{API_ROOT}{location}'), endpoint)

def __pathname(pathname: str) -> str:
  ''' Rewrite pathname vith some validations '''
  # replace repeated slashes to one
  result = re.sub(r'\/{2,}', '/', pathname)
  return result
