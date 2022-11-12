''' Router methods '''

from mvc_flask import Router

API_ROOT = '/api'

def get(location: str, endpoint: str) -> None:
  '''Decorates mvc_flask.Router GET method to simplificate calls in routes config file'''
  Router.get(f'{API_ROOT}{location}', endpoint)

def post(location: str, endpoint: str) -> None:
  '''Decorates mvc_flask.Router POST method to simplificate calls in routes config file'''
  Router.post(f'{API_ROOT}{location}', endpoint)
