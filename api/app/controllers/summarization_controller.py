''' Prime numbers controller '''

import logging
from app.controllers.application_controller import ApplicationController
from app.use_cases.summarizer.text_summarizer import TextSummarizer

class SummarizationController(ApplicationController):
  ''' API endpoint, implements summarization '''
  def __init__(self):
    self.layout('application')
    self.text_summarizer = TextSummarizer()

  def index(self):
    ''' This action show text summarization page '''
    logging.info(f'{self._params()=}')
    source_text = self._params().get('source_text')
    logging.info(f'{source_text=}')
    logging.info(f'Text  {source_text=} --------------------')
    summarization_result = self.text_summarizer.summarize_text(source_text)
    return self.render(locals = { 'source_text': source_text, 'summarization_result': summarization_result })

  def summarize_text(self):
    ''' API endpoint '''
    logging.info(f'{self._params()=}')
    source_text = self._params().get('source_text')
    if source_text is None or source_text == '':
      return { 'source_text': source_text, 'summarization_result': 'произошла ошибка - не задан текст' }, 400

    logging.info(f'{source_text=}')
    logging.info(f'Text  {source_text=} --------------------')
    summarization_result = self.text_summarizer.summarize_text(source_text)
    return { 'source_text': source_text, 'summarization_result': summarization_result }
