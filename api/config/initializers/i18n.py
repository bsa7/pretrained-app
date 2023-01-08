''' Initializes I18n '''
import os
import i18n

class I18n:
  ''' Imlements translations for application '''
  def __init__(self):
    self.initialize()

  def initialize(self):
    ''' Initializes I18n for application '''
    i18n.load_path.append(self.__localization_path())

  def t(key: str) -> str:
    ''' Returns translation '''
    return i18n.t(key)

  # Private class methods

  def __localization_path():
    ''' Returns absolute path to folder with localization files '''
    os.path.realpath('./locales')
