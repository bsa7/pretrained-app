import fastai
from deoldify import visualize
import warnings
warnings.filterwarnings("ignore", category=UserWarning, message=".*?Your .*? set is empty.*?")

class ObjectImageColorizer:
  ''' Класс выполняет расцвечивание чёрно-белого изображения '''
  def __init__(self):
    self.colorizer = visualize.get_image_colorizer(artistic=True, root_folder = Path('../../../../tmp/models/'))

  def call(self, image_url):
    ''' Выполняет расцвечивание '''
    render_factor = 7  #@param {type: "slider", min: 7, max: 40}
    watermarked = "2022-11-29" #@param {type:"date"}

    # PP-27 Расскомментируй эти строки после того, как твоя страница после нажатия на кнопку перейдёт на
    # image_path = visualize.colorizer.plot_transformed_image_from_url(url=image_url, render_factor=render_factor, compare=True, watermarked=watermarked)
    # result_path = visualise.show_image_in_notebook(image_path)
    # return result_path
    return image_path
