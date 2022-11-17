''' This is test case for prime_numbers_iterator class '''

from app.use_cases.prime_numbers.prime_numbers_iterator import PrimeNumbersIterator
from base.application_test_case import ApplicationTestCase

class PrimeNUmbersIteratorTestCase(ApplicationTestCase):
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

  def test_logging(self):
    ''' Check, if iterator logged responses '''
    iterator = PrimeNumbersIterator(19)
    with self.assertLogs() as captured:
      next_value = next(iterator)
      # check that there is only one log message
      self.assertEqual(len(captured.records), 1)
      # and it is the proper one
      self.assertEqual(captured.records[0].getMessage(), "next: 19")
