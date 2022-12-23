''' В этом файле находится предварительно обученная модель классификации ибзоражений '''

from transformers import ViTFeatureExtractor, ViTForImageClassification
from PIL import Image
import requests

class ObjectClassifier:
  ''' Класс выполняет классификацию объектов на изображении '''
  def __init__(self):
    self.feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224')
    self.model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

  def call(self, image_url):
    image = Image.open(requests.get(image_url, stream = True).raw)
    inputs = self.feature_extractor(images=image, return_tensors="pt")
    outputs = self.model(**inputs)
    logits = outputs.logits
    predicted_class_idx = logits.argmax(-1).item()
    result = f"на картинке изображено {self.model.config.id2label[predicted_class_idx]}"
    return result
