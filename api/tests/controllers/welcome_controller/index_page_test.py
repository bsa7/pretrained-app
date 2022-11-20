''' This is test case for welcome index page '''

# from flask import url_for
# from ward import each, test
# from tests.fixtures import client, browser

# @test('should return status 200 for GET (INDEX)', tags=['request'])
# def _(client = client, resource = each('welcome')):
#     response = client.get(url_for(f'{resource}.index'))

#     assert response.status_code == 200


# import unittest
# from app.controllers.welcome_controller import WelcomeController
# from base.application_test_case import ApplicationTestCase

# class WelcomeControllerIndexPageTestCase(ApplicationTestCase):
#   '''Tests for 'WelcomeController#index' action'''
#   def __init__(self, *args, **kwargs):
#     '''Test Initialization'''
#     super(WelcomeControllerIndexPageTestCase, self).__init__(*args, **kwargs)
#     self._subject = WelcomeController()

#   def test_have_layout(self):
#     ''' Check, if controller implements method `layout` '''
#     self.assertEqual(self._subject.current_layout(), 'app/views/layouts/application.html')

#   def test_render_welcome_page(self):
#     ''' Check if controller respond on /welcome with expected html '''
#     response = self.test_client.get("/welcome")
#     print(f'{response.text=}')
#     assert b"Hello, World!" in response.data
