''' This is test case for prime_numbers_iterator class '''
import unittest
from app.use_cases.silero_stt.silero import Silero

class SileroTestCase(unittest.TestCase):
  '''Tests for 'Silero' class'''

  def test_without_args(self):
    ''' Check, if there a right value for next '''
    iterator = PrimeNumbersIterator()
    self.assertEqual(next(iterator), 2)
    self.assertEqual(next(iterator), 3)
    self.assertEqual(next(iterator), 5)
    self.assertEqual(next(iterator), 7)

  def test_with_args(self):
    ''' Check, if there a right value for next '''
    iterator = PrimeNumbersIterator(19)
    self.assertEqual(next(iterator), 19)
    self.assertEqual(next(iterator), 23)
    self.assertEqual(next(iterator), 29)
