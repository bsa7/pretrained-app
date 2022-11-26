''' Initializes I18n '''

import i18n
import logging
import os

# import pdb; pdb.set_trace()

class I18n:
  ''' Imlements translations for application '''
  def __init__(self, root_path):
    ''' Initializes I18n for application '''
    localization_path = self.__localization_path(root_path)
    logging.info(f'I18n initialization. Locale folder: {localization_path}, root_path: {root_path}')
    print(f'I18n initialization. Locale folder: {localization_path}, root_path: {root_path}')
    # i18n.config.set('load_path', [localization_path])
    # pdb
    # print(i18n)
    i18n.load_path.append(localization_path)
    i18n.config.set('error_on_missing_translation', True)
    i18n.config.set('file_format', 'yml')
    logging.info(f'{i18n.config.settings=}')
    print(f'{i18n.config.settings=}')

  def __localization_path(self, root_path):
    ''' Returns absolute path to folder with localization files '''
    return os.path.join(root_path, 'config/locales')
