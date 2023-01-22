''' This file defines a fixtures to dry your tests '''
from ward import fixture
from splinter import Browser
from tests_folder.base.application_test_case import Application

app = Application(__name__).app
app.testing = True
application_context = app.test_request_context()
application_context.push()

@fixture
def app_context():
  ''' This fixture used as mock of your application '''
  return app

@fixture
def client(context = app_context):
  ''' This fixture implements interface to Flask test_client '''
  with context.test_client() as test_client:
    yield test_client

@fixture
def browser(context = app_context):
  ''' This fixture implement browser instance to feature testing '''
  with context.test_client():
    yield Browser('flask', app = context)
