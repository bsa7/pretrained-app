''' Prime numbers controller '''

import logging
import pyaudio
from flask import Response
from app.controllers.application_controller import ApplicationController
from app.use_cases.speech_recognition.pocket_spinx import PocketSphinx

class MentalcountingController(ApplicationController):
  ''' API endpoint, implements classifier screen '''
  def __init__(self):
    self.recognizer = PocketSphinx()
    self.layout('application')

  def index(self):
    ''' This action show classifier index page '''
    return self.render()

  def recognize_speech(self):
    ''' Receives audio blob from client side, recognize and response with text '''
    audio_data = self._params().get('audio')
    mime_type = self._params().get('mimeType')
    logging.info(f'audio_data: {audio_data}, mime_type: {mime_type}')
    text = self.recognizer.recognize(audio_data, mime_type = mime_type)
    status = 'success' if text is not None else 'failure'
    result = { 'status': status, 'text': text }
    logging.info('--------------------------------- recognize_speech#19 -------------------------')
    logging.info(f'result: {result=}')
    return result
