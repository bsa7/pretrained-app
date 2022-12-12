''' Prime numbers controller '''

import logging
import pyaudio
from flask import Response
from app.controllers.application_controller import ApplicationController

class MentalcountingController(ApplicationController):
  ''' API endpoint, implements classifier screen '''
  def __init__(self):
    self.layout('application')

  def index(self):
    ''' This action show classifier index page '''
    return self.render()

  def recognize_speech(self):
    ''' Receives audio blob from client side, recognize and response with text '''
    params = self._params()
    result = { 'status': 'success', 'text': 'your speech is here...' }
    logging.info('--------------------------------- recognize_speech#19 -------------------------')
    logging.info(f'params: {params}')
    logging.info(f'result: {result}')
    return result
