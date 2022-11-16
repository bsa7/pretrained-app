''' This is test case for prime_numbers_iterator class '''
import unittest
from app.controllers.welcome_controller import WelcomeController

class WelcomeControllerTestCase(unittest.TestCase):
  '''Tests for 'WelcomeController' class'''
  def __init__(self, *args, **kwargs):
    '''Test Initialization'''
    super(WelcomeControllerTestCase, self).__init__(*args, **kwargs)
    self._subject = WelcomeController()

  def test_without_args(self):
    ''' Check, if controller implements method `layout` '''
    self.assertEqual(self._subject.current_layout(), 'app/views/layouts/application.html')
