''' В этом файле находится предварительно обученная модель распознавания устной речи '''
import base64
import logging
import speech_recognition as sr

class PocketSphinx:
  ''' Класс выполняет распознавание речи в текст '''
  def __init__(self):
    self.recognizer = sr.Recognizer()

  def recognize(self, audio_data):
    ''' На входе принимает бинарные аудиоданные '''
    decoded_audio = base64.b64decode(audio_data)
    result = self.recognizer.recognize_sphinx(decoded_audio)
    logging.info(f'{result=}')
    return result
