''' Prime numbers controller '''

# PP-27 Скопируй этот контроллер в свой с именем image_colorizer_controller.py, класс тоже переименуй

import logging
from app.controllers.application_controller import ApplicationController
from app.use_cases.classifier.object_classifier import ObjectClassifier

class ClassifierController(ApplicationController):
  ''' API endpoint, implements classifier screen '''
  def __init__(self):
    self.layout('application')
    self.object_classifier = ObjectClassifier()

  def index(self):
    ''' This action show classifier index page '''
    return self.render()

  def show(self) -> dict:
    params = self.show_params()
    logging.info(f'------------------------- Params: {params=} -------------------------------')

    image_url = params.get('image_url')
    recognition_result = self.object_classifier.call(image_url)

    return self.render(locals = { 'image_url': image_url, 'recognition_result': recognition_result })

  # private controller methods:

  def show_params(self):
    ''' Возвращает параметры, переданные экшену "start" '''
    return self._params()
