import unittest
from app.lib.math_utilities import square

class SquareTestCase(unittest.TestCase):
  '''Tests for 'square' function'''

  def test_for_positive(self):
    '''Squares positive value'''

    result = square(2)
    self.assertEqual(result, 4)

    result = square(11)
    self.assertEqual(result, 121)

  def test_for_negative(self):
    '''Squares negative value'''

    result = square(-2)
    self.assertEqual(result, 4)

    result = square(-12)
    self.assertEqual(result, 144)
