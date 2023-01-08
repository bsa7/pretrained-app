''' This file is monkeypatches the FlaskMVC class '''
# This class wrongly reinitializes Flask attribute `template_folder`
# So, this class fix that behaviour.

from flask import Flask
from mvc_flask import FlaskMVC

class MonkeypatchedFlaskMVC(FlaskMVC):
  ''' Redefine init_app method of original FlaskMVC.'''
  # pylint: disable=too-few-public-methods

  def init_app(self, app: Flask = None, path="app"):
    ''' This method redefined original method '''
    template_folder = app.template_folder
    super().init_app(app, path)
    if template_folder is not None:
      app.template_folder = template_folder
