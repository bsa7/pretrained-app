''' This file is monkeypatches the FlaskMVC class '''
# This class wrongly reinitializes Flask attribute `template_folder`
# So, this class fix that behaviour.

from flask import Flask
from mvc_flask import FlaskMVC

class MonkeypatchedFlaskMVC(FlaskMVC):
  ''' Redefine init_app method of original FlaskMVC.'''
  # We remove that code after mainteners satisfy that issue:
  # https://github.com/marcuxyz/mvc-flask/issues/29

  def init_app(self, app: Flask = None, path="app"):
    template_folder = app.template_folder
    super().init_app(app, path)
    if template_folder is not None:
      app.template_folder = template_folder
