from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input
from tensorflow.keras.applications.efficientnet import decode_predictions
import numpy as np

# Загружаем предварительно обученную модель EfficientNetB0
model = EfficientNetB0(weights='imagenet')

# Прописываем путь к файлу с изображением
img_path = 'plane.jpg'
# Загружаем изображение в память
# EfficientNetB0 рассчитана на изображения размером 224х224
img = image.load_img(img_path, target_size=(224, 224))
# Выполняем предварительную обработку изображения
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
# Запускаем распознавание
preds = model.predict(x)
# Печатаем ТОП-3 класса с самой большой вероятностью
classes = decode_predictions(preds, top=3)[0]
for cl in classes:
    print(cl[1], cl[2])
