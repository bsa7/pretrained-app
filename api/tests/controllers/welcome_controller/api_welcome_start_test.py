''' This is test case for /api/welcome/start endpoint '''
# import unittest
# from app.controllers.welcome_controller import WelcomeController
# from config.application import Application

# class ApiWelcomeStartControllerTestCase(unittest.TestCase):
#   '''Tests for 'WelcomeController#start' action'''
#   def __init__(self, *args, **kwargs):
#     '''Test Initialization'''
#     super(ApiWelcomeStartControllerTestCase, self).__init__(*args, **kwargs)
#     self._subject = WelcomeController()

  # def test_start_logging(self):
  #   """Test can upload file."""
  #   with self.assertLogs() as captured:
  #     # https://stackoverflow.com/questions/35684436/testing-file-uploads-in-flask
  #     data = {'name': 'this is a name', 'age': 12}
  #     data = {key: str(value) for key, value in data.items()}
  #     data['file'] = (io.BytesIO(b"abcdef"), 'test.jpg')
  #     self.login()
  #     response = self.client.post(
  #         url_for('adverts.save'), data=data, follow_redirects=True,
  #         content_type='multipart/form-data'
  #     )
  #     self.assertIn(b'Your item has been saved.', response.data)
  #     advert = Item.query.get(1)
  #     self.assertIsNotNone(item.logo)
