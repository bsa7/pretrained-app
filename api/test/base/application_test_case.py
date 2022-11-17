''' Implements base class for all application unit tests '''

import logging
import unittest
from config.application import Application

class ApplicationTestCase(unittest.TestCase):
  ''' This is base class for all unit tests '''
  def setUp(self):
    ''' Initializes application '''
    self.app = Application(__name__).app()
