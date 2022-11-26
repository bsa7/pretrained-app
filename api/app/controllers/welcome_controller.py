''' Prime numbers controller '''

import logging
from app.controllers.application_controller import ApplicationController

class WelcomeController(ApplicationController):
  ''' API endpoint, implements welcome screen '''
  def __init__(self):
    self.layout('application')
    super().__init__()

  def index(self):
    ''' This action show welcome index page '''
    welcome_text = self._i18n.t('messages.hello_world')
    print(f'{self._i18n=}')
    print(f'{welcome_text=}')
    title = self._i18n.t('messages.the_flask_app')
    return self.render(locals = { 'title': title, 'welcome_text': welcome_text })

  def start(self) -> dict:
    file_params = self.__file_params()
    result = { 'success': True, 'file_name': file_params['file_name'] }

    file_content = file_params['data']
    return result

  # private controller methods:

  def __file_params(self) -> dict:
    return super().request_file(name = 'data')
