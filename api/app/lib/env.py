import os
from dotenv import load_dotenv
from app.lib.singleton import Singleton

class Env(metaclass = Singleton):
  def __init__(self):
    load_dotenv()

  def get(self, variable_name: str):
    ''' Читает переменную среды '''
    return os.getenv(variable_name)
