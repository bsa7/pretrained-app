''' This file contains class, iterates over prime numbers '''
import primesieve
import logging

class PrimeNumbersIterator:
  ''' Prime numbers iterator '''
  def __init__(self, start = None):
    self.__current_prime = start - 1 if start is not None else 1
    print(f'init: {self.__current_prime=}, {start=}')

  def __iter__(self):
    return self

  def __next__(self):
    self.__current_prime = primesieve.n_primes(1, self.__current_prime + 1)[0]
    logging.info(f'next: {self.__current_prime}')
    return self.__current_prime
