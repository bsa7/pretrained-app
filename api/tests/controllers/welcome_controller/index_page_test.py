''' This is test case for welcome index page '''

from flask import url_for
from ward import each, test
from tests.fixtures import client, browser

common_tags = ['request', 'welcome']

@test('should return status 200 for GET (INDEX)', tags = common_tags)
def _(client = client, resource = each('welcome')):
  response = client.get(url_for(f'{resource}.index'))
  assert response.status_code == 200

@test('Page contains phrase "Hello World!" on English language.', tags = [*common_tags, 'i18n'])
def _(client = client, resource = each('welcome')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'Hello, World!' in response.text

@test('Page contains title on English language.', tags = [*common_tags, 'i18n'])
def _(client = client, resource = each('welcome')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'This is the Flask application.' in response.text
