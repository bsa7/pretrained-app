''' В этом файле находится предварительно обученная модель распознавания устной речи '''
from pydub import AudioSegment
import base64
import io
import logging
import pygame
import speech_recognition as sr


class PocketSphinx:
  ''' Класс выполняет распознавание речи в текст '''
  def __init__(self):
    pygame.mixer.init()
    self.recognizer = sr.Recognizer()

  def recognize(self, audio_data, mime_type = 'audio/webm;codecs=opus'):
    ''' На входе принимает бинарные аудиоданные '''
    audio_data = audio_data.replace(f'data:{mime_type};base64,', '')
    print(f'{audio_data=}')
    decoded_audio = base64.b64decode(audio_data)
    temp_file_name = '/home/slon/tmp/_test.webm'
    with open(temp_file_name, 'wb') as f:
      f.write(decoded_audio)

    wav_file_name = self.webm2wav(temp_file_name)

    audio_file = sr.AudioFile(wav_file_name)
    with audio_file as audio_source:
      sr_audio_file = self.recognizer.record(audio_source)

    result = self.recognizer.recognize_sphinx(sr_audio_file)
    logging.info(f'{result=}')
    return result

  def webm2wav(self, file_name):
    wav_file_name = file_name.replace('.webm', '.wav')
    x = AudioSegment.from_file(file_name)
    x.export(wav_file_name, format = 'wav')
    return wav_file_name
