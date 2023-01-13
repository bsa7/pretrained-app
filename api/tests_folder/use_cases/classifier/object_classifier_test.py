''' This is test case for math_utilities module '''
from ward import each, test
from app.use_cases.classifier.object_classifier import ObjectClassifier

@test("При передаче пустой ссылки возвращает соответствующее сообщение", tags=['use_cases', 'classifier'])
def _():
  classifier = ObjectClassifier()
  result = classifier.call('')
  assert result == 'произошла ошибка. Вы не передали ссылку на изображение, распознавание не выполнено.'

@test("При передаче неправильной ссылки возвращает соответствующее сообщение", tags=['use_cases', 'classifier'])
def _():
  classifier = ObjectClassifier()
  result = classifier.call('http://this-site-not-exist.cccccccccccccccc')
  assert result == 'произошла ошибка. Вы передали неверную ссылку на изображение, распознавание не выполнено.'

@test("При передаче ссылки не на изображение возвращает соответствующее сообщение", tags=['use_cases', 'classifier'])
def _():
  classifier = ObjectClassifier()
  result = classifier.call('https://dlcdnet.asus.com/pub/ASUS/nb/X75A/R7051_eManual_X75A_Z104.pdf')
  assert result == 'произошла ошибка. Вы передали ссылку на объект, который не является изображением'

@test("При передаче правильной ссылки распознаёт объект на изображении", tags=['use_cases', 'classifier'])
def _():
  classifier = ObjectClassifier()
  result = classifier.call('https://akulovka.com/wa-data/public/blog/img/1-5.jpg')
  assert result == 'на картинке изображено bee'
