''' Если задана переменная окружения ACTION_IN_GITHUB, то некоторые тесты пропускаются '''
import os

class GithubAction:
  def check(self):
    ''' Возвращает true, если переменная ACTION_IN_GITHUB установлена '''
    return os.getenv('ACTION_IN_GITHUB') is not None
