''' Implements base class for all application unit tests '''

import logging
import unittest
from config.application import Application

class ApplicationTestCase():
  ''' This is base class for all unit tests '''
  @property
  def app(self):
    ''' Initializes application test instance '''
    app = Application(__name__).app
    print(f'{app=}')
    return app

  @property
  def test_client(self):
    return self.app.test_client()
