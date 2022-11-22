''' This is test case for math_utilities module '''
from ward import each, test
from app.lib.math_utilities import square

@test('Squares positive value')
def _():
  result = square(2)
  assert result == 4
  result = square(11)
  assert result == 121

@test('Squares negative value')
def _():
  result = square(-2)
  assert result == 4

  result = square(-12)
  assert result == 144
