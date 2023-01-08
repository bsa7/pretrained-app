''' В этом файле находится предварительно обученная модель автореферирования текста '''
import re
import os
import torch
from summarizer import Summarizer

class TextSummarizer:
  ''' Класс выполняет автореферат текста '''
  def __init__(self):
    torch.cuda.empty_cache()
    self.source_text = None
    self.result = 'Здесь будет результат автореферирования'
    api_env = os.getenv('API_ENV')
    print(f'{api_env=}')
    if api_env == 'test':
      # При запуске тестов на гитхабе этот код падает из-за ограничений
      self.model = None
    else:
      self.model = Summarizer()

  def summarize_text(self, text: str) -> str:
    ''' Выполняет автореферирование '''
    self.source_text = text or ''
    prepared_text = self.__prepare_text(self.source_text)
    if self.model is None:
      return self.source_text

    self.result = self.model(prepared_text, ratio = 0.1)
    return self.result

  def __prepare_text(self, text: str) -> str:
    ''' Подготавливает текст для последующей обработки '''
    if text is None:
      return ''

    text = re.sub(r'\n|\r', ' ', text)
    text = re.sub(r' {2,}', ' ', text)
    return text.strip()
