''' This is test case for math_utilities module '''
from ward import each, test
from config.application import Application

@test("Check if template_folder is equal to 'app/views'")
def _():
  app = Application().app
  assert app.template_folder == 'app/views'
