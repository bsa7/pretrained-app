''' API Router '''

class Router: # pylint: disable=too-few-public-methods
  ''' Router initializes API routes '''

  def __init__(self, app):
    self.app = app
    self.define_routes()

  def define_routes(self):
    ''' This method defines all API routes '''
    app = self.app

    @app.route('/hello', methods=['GET'])
    def getHello(): # pylint: disable=invalid-name
      ''' This is just an example of route handler '''
      return 'This is a hello GET request!'
