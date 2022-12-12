''' Implements abstract base API controller '''

import inspect
import logging
import re
from flask import render_template, request

class ApplicationController:
  ''' ApplicationController is a parent class for other application controllers '''
  def __init__(self):
    ''' Initializes the application controller '''
    self.__layout = None

  def _response(self, **payload) -> dict:
    ''' This is wrapper for controller response '''
    return payload

  def _params(self) -> dict:
    ''' Returns rest parameters '''
    logging.info(f'{dir(request)=}')
    logging.info(f'{request.data=}')
    return dict(request.args)

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

  def render(self, layout = True, locals = {}):
    '''render html response with or without layout'''
    template_name = f'{self.__controller_name}/{self.__action_name}.{self.__template_format}'
    logging.info(f'Controller {self.__controller_name}#{self.__action_name}, render {template_name=}')
    return render_template(template_name, locals = locals)

  def request_file(self, name) -> dict:
    ''' Returns files, attached in post request '''
    logging.info(request.files)
    file = request.files[name]
    logging.info(f'#38 {name=}')
    result = {}
    result['file_name'] = file.filename
    result['data'] = file.read()

    logging.info(f'#42 {result=}')
    return result

  @property
  def __controller_name(self) -> str:
    ''' Returns controller name withouth suffix `_controller.py` '''
    controller_classname = self.__class__.__name__
    controller_name = re.sub(r'Controller', '', controller_classname).lower()
    return controller_name

  @property
  def __action_name(self) -> str:
    ''' Returns action name of child controller method which called that render '''
    return inspect.stack()[2][3]

  @property
  def __template_format(self) -> str:
    ''' Initialized application template format '''
    # TODO - will use haml
    return 'html'
