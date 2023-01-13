''' This test check api configuration '''
import os
from dotenv import load_dotenv
from ward import test

@test("При запуске приложения переменные среды инициализируются", tags=['configtest', 'dotenv'])
def _():
  load_dotenv()
  mongo_host = os.getenv('MONGO_USER_NAME')
  assert mongo_host == 'admin'
