''' Prime numbers controller '''

import logging
import pyaudio
from flask import Response
from app.controllers.application_controller import ApplicationController

class MentalcountingController(ApplicationController):
  ''' API endpoint, implements classifier screen '''
  def __init__(self):
    self.layout('application')
    self.FORMAT = pyaudio.paInt16
    self.BITS_PER_SAMPLE = 16
    self.CHANNELS = 2
    self.RATE = 44100
    self.CHUNK = 1024
    self.RECORD_SECONDS = 5
    self.audio1 = pyaudio.PyAudio()

  def index(self):
    ''' This action show classifier index page '''
    return self.render()

  def audio(self):
    # start Recording
    def sound():
      wav_header = self.__genHeader(bitsPerSample = self.BITS_PER_SAMPLE, channels = self.CHANNELS, sampleRate = self.RATE)
      stream = self.audio1.open(channels=self.CHANNELS,
                                format=self.FORMAT,
                                frames_per_buffer=self.CHUNK,
                                input_device_index=1,
                                input=True,
                                rate=self.RATE)
      print("recording...")
      #frames = []
      first_run = True
      while True:
        if first_run:
          data = wav_header + stream.read(self.CHUNK)
          first_run = False
        else:
          data = stream.read(self.CHUNK)
        yield(data)

    return Response(sound())

  def __genHeader(self, sampleRate, bitsPerSample, channels):
    datasize = 2000*10**6
    o = bytes("RIFF",'ascii')                                               # (4byte) Marks file as RIFF
    o += (datasize + 36).to_bytes(4,'little')                               # (4byte) File size in bytes excluding this and RIFF marker
    o += bytes("WAVE",'ascii')                                              # (4byte) File type
    o += bytes("fmt ",'ascii')                                              # (4byte) Format Chunk Marker
    o += (16).to_bytes(4,'little')                                          # (4byte) Length of above format data
    o += (1).to_bytes(2,'little')                                           # (2byte) Format type (1 - PCM)
    o += (channels).to_bytes(2,'little')                                    # (2byte)
    o += (sampleRate).to_bytes(4,'little')                                  # (4byte)
    o += (sampleRate * channels * bitsPerSample // 8).to_bytes(4,'little')  # (4byte)
    o += (channels * bitsPerSample // 8).to_bytes(2,'little')               # (2byte)
    o += (bitsPerSample).to_bytes(2,'little')                               # (2byte)
    o += bytes("data",'ascii')                                              # (4byte) Data Chunk Marker
    o += (datasize).to_bytes(4,'little')                                    # (4byte) Data size in bytes
    return o
