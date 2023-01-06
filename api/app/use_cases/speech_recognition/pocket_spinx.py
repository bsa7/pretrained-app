''' В этом файле находится предварительно обученная модель распознавания устной речи '''
from pathlib import Path
from pydub import AudioSegment
from datetime import datetime
import base64
import io
import logging
import os
import speech_recognition as sr

class PocketSphinx:
  ''' Класс выполняет распознавание речи в текст '''
  def __init__(self):
    self.root_path = Path(__file__).parent.parent.parent.parent.resolve()
    self.recognizer = sr.Recognizer()

  def recognize(self, audio_data, mime_type = 'audio/webm;codecs=opus'):
    ''' На входе принимает бинарные аудиоданные '''
    audio_data = audio_data.replace(f'data:{mime_type};base64,', '')
    decoded_audio = base64.b64decode(audio_data)
    temp_file_name = self.temp_file_name
    with open(temp_file_name, 'wb') as f:
      f.write(decoded_audio)

    wav_file_name = self.webm2wav(temp_file_name)

    audio_file = sr.AudioFile(wav_file_name)
    with audio_file:
      sr_audio_file = self.recognizer.record(audio_file)

    result = None
    try:
      result = self.recognizer.recognize_google(sr_audio_file, language = 'ru-RU')
      logging.info(f'Recognition result: {result=}')
    except sr.UnknownValueError:
      logging.info(f'Recognition failed')
    except BaseException:
      logging.exception('Произошла ошибка')
    finally:
      os.remove(temp_file_name)
      os.remove(wav_file_name)

    return result

  def webm2wav(self, file_name):
    '''Преобразует имя файла webm в wav'''
    wav_file_name = file_name.replace('.webm', '.wav')
    x = AudioSegment.from_file(file_name)
    x.export(wav_file_name, format = 'wav')
    return wav_file_name

  @property
  def temp_file_name(self):
    '''Генерирует имя временного файла для записи звука'''
    timestamp = datetime.timestamp(datetime.now())
    file_name = f'{self.root_path}/tmp/_test_#{timestamp}.webm'
    logging.info(f'Создан временный файл {file_name}')
    return file_name
