''' This is test case for image_classifier API enpoint '''

from flask import url_for
from ward import each, test
from tests_folder.fixtures import client

TEST_SOURCE_TEXT = '''
The African forest elephant's tusks are straight and point downwards.[6]
Both male and female African elephants have tusks that grow from deciduous teeth called tushes,
which are replaced by tusks when calves are about one year old. Tusks are composed of dentin,
which forms small diamond-shaped structures in the tusk's center that become larger at its periphery.
A conical layer on their tips consisting of tooth enamel is usually worn off when the elephant is five years old.
'''

@test('should return status 400 for POST (summarize_text) within source_text passed', tags=['api', 'summarizer'])
def _(client=client, resource=each('summarization')):
  response = client.post(url_for(f'{resource}.summarize_text', source_text = ''))
  assert response.status_code == 400

@test('should return status 200 for POST (summarize_text) with source_text passed', tags=['api', 'summarizer', 'current'])
def _(client=client, resource=each('summarization')):
  response = client.post(url_for(f'{resource}.summarize_text', source_text = TEST_SOURCE_TEXT))
  assert response.status_code == 200
