''' This usecase implements interface to Silero speech to text and text to speech model '''

import torch
import random
from glob import glob
from omegaconf import OmegaConf
from app.use_cases.silero_stt.silero_source import utils
# utils.init_jit_model
# utils.split_into_batches
# utils.read_audio
# utils.read_batch
# utils.prepare_model_input

import numpy as np


class Silero:
  def __init__(self):
    self.device = torch.device('cpu')   # you can use any pytorch device
    self.models = OmegaConf.load('models.yml')
    self.model, self.decoder = utils.init_jit_model(self.models.stt_models.en.latest.jit, device = self.device)

  def wav_to_text(self, file = 'test.wav') -> str:
    ''' Метод, преобразующий запись голоса в текст '''
    batch = utils.read_batch([file])
    input = utils.prepare_model_input(batch, device = self.device)
    output = self.model(input)
    return self.decoder(output[0].cpu())
