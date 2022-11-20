''' This is test case for prime_numbers_iterator class '''

import logging
from app.use_cases.prime_numbers.prime_numbers_iterator import PrimeNumbersIterator
from testfixtures import LogCapture
from ward import each, test

@test('Check, if there a right value for next')
def _():
  iterator = PrimeNumbersIterator()
  assert next(iterator) == 2
  assert next(iterator) == 3
  assert next(iterator) == 5
  assert next(iterator) == 7

@test('Check, if there a right value for next if argument given')
def _():
  iterator = PrimeNumbersIterator(19)
  assert next(iterator) == 19
  assert next(iterator) == 23
  assert next(iterator) == 29

@test('Check, if iterator logged responses')
def _():
  iterator = PrimeNumbersIterator(19)
  with LogCapture() as captured:
    next_value = next(iterator)
    # check that there is only one log message
    assert len(captured.records) == 1
    # and it is the proper one
    assert captured.records[0].getMessage() == "next: 19"
