''' This is test case for image_classifier index page '''

from flask import url_for
from ward import each, test
from tests_folder.fixtures import client
import pdb

@test('should return status 200 for GET (INDEX)', tags=['request', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.get(url_for(f'{resource}.index'))
  assert response.status_code == 200

@test('На странице /image_classifier отображается надпись "Классификация объектов на изображении."', tags=['request', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'Классификация объектов на изображении.' in response.text

@test('На странице /image_classifier отображается кнопка submit"', tags=['request', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'type="submit" value = "Выполнить"' in response.text

@test('На странице /image_classifier находится поле ввода для адреса изображения', tags=['request', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.get(url_for(f'{resource}.index'))
  assert 'value="https://akulovka.com/wa-data/public/blog/img/1-5.jpg"' in response.text
