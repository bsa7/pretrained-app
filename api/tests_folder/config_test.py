''' This test check api configuration '''
from ward import test
from app.lib.env import Env

@test("Проверка переменной окружения MONGO_USER_NAME", tags=['configtest', 'dotenv'])
def _():
  mongo_host = Env().get('MONGO_USER_NAME')
  assert mongo_host == 'root'

@test("Проверка переменной окружения MONGO_USER_PASSWORD", tags=['configtest', 'dotenv'])
def _():
  mongo_host = Env().get('MONGO_USER_PASSWORD')
  assert mongo_host == '123'

@test("Проверка переменной окружения MONGO_HOST", tags=['configtest', 'dotenv'])
def _():
  mongo_host = Env().get('MONGO_HOST')
  assert mongo_host == '0.0.0.0:27017'

@test("Проверка переменной окружения MONGO_DATABASE_NAME", tags=['configtest', 'dotenv'])
def _():
  mongo_host = Env().get('MONGO_DATABASE_NAME')
  assert mongo_host == 'pretrained_app'
