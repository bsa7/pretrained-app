''' Implements base class for all application unit tests '''

import logging
import unittest
from config.application import Application

class ApplicationTestCase():
  ''' This is base class for all unit tests '''
  def __init__(self):
    self.application = Application(__name__).app

  @property
  def app(self):
    ''' Initializes application test instance '''
    print(f'{self.application=}')
    return self.application

  @property
  def test_client(self):
    return self.app.test_client()
