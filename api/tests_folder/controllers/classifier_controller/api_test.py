''' This is test case for image_classifier API enpoint '''

from flask import url_for
from ward import each, test
from tests_folder.fixtures import client

@test('should return status 400 for POST (classify_image) within image_url passed', tags=['api', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.post(url_for(f'{resource}.classify_image', image_url = ''))
  assert response.status_code == 400

@test('should return status 400 for POST (classify_image) if image_url incorrect', tags=['api', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.post(url_for(f'{resource}.classify_image', image_url = 'https://library.oapen.org/bitstream/id/056a11be-ce3a-44b9-8987-a6c68fce8d9b/11283.pdf'))
  assert response.status_code == 400

@test('should return status 400 for POST (classify_image) if image_url unavailable', tags=['api', 'classifier'])
def _(client=client, resource=each('classifier')):
  response = client.post(url_for(f'{resource}.classify_image', image_url = 'https://unexist_image.com/image.png'))
  assert response.status_code == 400
