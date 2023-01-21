''' Prime numbers controller '''

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
    ''' Рендер HTML '''
    params = self._params()
    image_url = params.get('image_url')
    recognition_result = self.object_classifier.call(image_url)

    return self.render(locals = { 'image_url': image_url, 'recognition_result': recognition_result })

  def classify_image(self) -> dict:
    ''' JSON API response '''
    params = self._params()
    image_url = params.get('image_url')

    if image_url is None or image_url == '':
      return { 'image_url': image_url, 'recognition_result': None }, 400

    recognition_result = self.object_classifier.call(image_url)
    if 'произошла ошибка' in recognition_result:
      return { 'image_url': image_url, 'recognition_result': recognition_result }, 400

    return { 'image_url': image_url, 'recognition_result': recognition_result }
