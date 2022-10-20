''' Prime numbers controller '''
from app.use_cases.prime_numbers.prime_numbers_iterator import PrimeNumbersIterator

class PrimenumbersController():
  ''' API endpoint, implements prime numbers '''
  def __init__(self):
    self.iterator = PrimeNumbersIterator()

  def show(self):
    ''' This action show prime numbers '''
    return { 'next_prime': next(self.iterator) }
