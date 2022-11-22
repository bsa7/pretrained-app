''' Prime numbers controller '''

import logging
from app.controllers.application_controller import ApplicationController

class WelcomeController(ApplicationController):
  ''' API endpoint, implements welcome screen '''
  def __init__(self):
    self.layout('application')

  def index(self):
    ''' This action show welcome index page '''
    return self.render()

  def start(self) -> dict:
    file_params = self.__file_params()
    result = { 'success': True, 'file_name': file_params['file_name'] }

    file_content = file_params['data']
    return result

  # private controller methods:

  def __file_params(self) -> dict:
    return super().request_file(name = 'data')
