''' Implements abstract base API controller '''

from flask import request

class ApplicationController:
  ''' BaseController is a parent class for other application controllers '''
  def __init__(self):
    '''Initializes the application controller'''
    self.__layout = None

  def _response(self, **payload) -> dict:
    ''' This is wrapper for controller response '''
    return payload

  def _params(self) -> dict:
    ''' Returns rest parameters '''
    return request.args

  def _files(self) -> dict:
    ''' Returns files, attached in post request '''
    return request.files

  def layout(self, layout_name: str):
    '''Set a layout, when you want to render response as html'''
    '''All layouts stored in app/views/layouts folder'''
    self.__layout = f'app/views/layouts/{layout_name}.html'

  def current_layout(self) -> str | None:
    '''Returns a name of controller's layout.'''
    return self.__layout
