''' Development server '''

from config.application import Application

app = Application(__name__).app()

if __name__ == "__main__":
  app.run(host = '0.0.0.0', debug = True)
