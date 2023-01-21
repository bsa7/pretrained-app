''' В этом файле находится предварительно обученная модель классификации ибзоражений '''

from transformers import ViTFeatureExtractor, ViTForImageClassification
from PIL import Image, UnidentifiedImageError
import logging
import re
import requests

class ObjectClassifier:
  ''' Класс выполняет классификацию объектов на изображении '''
  def __init__(self):
    self.feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224')
    self.model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

  def call(self, image_url):
    try:
      image = self.__download_image(image_url)
    except requests.exceptions.ConnectionError:
      return 'произошла ошибка. Вы передали неверную ссылку на изображение, распознавание не выполнено.'
    except UnidentifiedImageError:
      return 'произошла ошибка. Вы передали ссылку на объект, который не является изображением'
    except Exception as error:
      logging.info(f'Ошибка: {error=}')
      logging.info(f'Методы: {dir(error)=}')
      logging.info(f'Класс: {type(error)=}')
      # logging.info(f'Сообщение: {error.strerror=}')
      return f'произошла неожиданная ошибка: {error}'

    if image is None:
      return 'произошла ошибка. Вы не передали ссылку на изображение, распознавание не выполнено.'

    inputs = self.feature_extractor(images=image, return_tensors="pt")
    outputs = self.model(**inputs)
    logits = outputs.logits
    predicted_class_idx = logits.argmax(-1).item()
    result = f"на картинке изображено {self.model.config.id2label[predicted_class_idx]}"
    return result

  def __download_image(self, image_url_or_path: str):
    ''' Скачивает файл изображения по ссылке'''
    if image_url_or_path == '':
      return None

    if re.match(r'^http', image_url_or_path):
      return Image.open(requests.get(image_url_or_path, stream = True).raw)

    return Image.open(image_url_or_path)
