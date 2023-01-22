''' В этом файле находится предварительно обученная модель автореферирования текста '''
import re
import os
import torch
from summarizers import Summarizers
from app.lib.singleton import Singleton

class TextSummarizer(metaclass = Singleton):
  ''' Класс выполняет автореферат текста '''
  def __init__(self):
    self.source_text = None
    self.result = 'Здесь будет результат автореферирования'
    self.model = Summarizers()

  def summarize_text(self, text: str) -> str:
    ''' Выполняет автореферирование '''
    self.source_text = text or ''
    prepared_text = self.__prepare_text(self.source_text)
    if self.model is None:
      return self.source_text

    self.result = self.model(prepared_text)
    return self.result

  def __prepare_text(self, text: str) -> str:
    ''' Подготавливает текст для последующей обработки '''
    if text is None:
      return ''

    text = re.sub(r'\n|\r', ' ', text)
    text = re.sub(r' {2,}', ' ', text)
    return text.strip()
