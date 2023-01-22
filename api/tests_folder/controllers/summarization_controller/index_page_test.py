''' This is test case for summarization page '''

from flask import url_for
from ward import each, test
from tests_folder.fixtures import client

@test('Возвращает статус 200 для GET запроса', tags=['request', 'text_summarization'])
def _(client = client, resource = each('summarization')):
  response = client.get(url_for(f'{resource}.index'))
  assert response.status_code == 200

@test('На странице /summarization отображается надпись "Автореферат текста онлайн"', tags=['request', 'text_summarization'])
def _(client = client, resource = each('summarization')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'Автореферат текста онлайн' in response.text

@test('На странице /summarization отображается кнопка submit"', tags=['request', 'text_summarization'])
def _(client = client, resource = each('summarization')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'value = "Выполнить автореферирование"' in response.text

@test('На странице /summarization находится поле ввода для адреса изображения', tags=['request', 'text_summarization'])
def _(client=client, resource=each('summarization')):
  response = client.get(url_for(f'{resource}.index'))
  assert '<textarea' in response.text
