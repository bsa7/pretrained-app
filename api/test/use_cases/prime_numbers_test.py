''' This is test case for prime_numbers_iterator class '''
import unittest
from app.use_cases.prime_numbers.prime_numbers_iterator import PrimeNumbersIterator

class PrimeNUmbersIteratorTestCase(unittest.TestCase):
  '''Tests for 'PrimeNumbersIterator' class'''

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
