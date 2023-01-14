''' Юнит - тесты для монго-клиента '''
from ward import each, test
from app.lib.mongo_client import MongoClient
from app.lib.env import Env
from tests_folder.base.skip_tests import GithubAction

@test("Проверяет правильность соединения клиента с mongodb", tags=['lib', 'mongo_client'])
def _():
  if GithubAction().check():
    return True

  assert MongoClient().check_connection() is True

@test("Проверяет правильность создания коллекций", tags=['lib', 'mongo_client'])
def _():
  if GithubAction().check():
    return True

  collection = MongoClient().collection('something')
  assert collection.database.name == Env().get('MONGO_DATABASE_NAME')
