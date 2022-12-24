''' В этом файле находится предварительно обученная модель автореферирования текста '''
import re
from summarizer import Summarizer

class TextSummarizer:
  ''' Класс выполняет автореферат текста '''
  def __init__(self):
    self.source_text = None
    self.result = 'Здесь будет результат автореферирования'
    self.model = Summarizer()

  def summarize_text(self, text: str) -> str:
    ''' Выполняет автореферирование '''
    self.source_text = text or ''
    prepared_text = self.__prepare_text(self.source_text)
    self.result = self.model(prepared_text, ratio = 0.1)
    return f'Длина исходного текста: {len(prepared_text)}, автореферат: {self.result}'

  def __prepare_text(self, text: str) -> str:
    ''' Подготавливает текст для последующей обработки '''
    text = re.sub(r'\n|\r', ' ', text)
    text = re.sub(r' {2,}', ' ', text)
    return text.strip()
