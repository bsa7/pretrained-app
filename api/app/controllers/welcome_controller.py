''' Prime numbers controller '''
from app.controllers.application_controller import ApplicationController

class WelcomeController(ApplicationController):
  ''' API endpoint, implements welcome screen '''
  def __init__(self):
    self.layout('application')

  def index(self):
    ''' This action show welcome text '''
    return self._response()
