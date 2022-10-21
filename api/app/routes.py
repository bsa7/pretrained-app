''' API Router '''
from mvc_flask import Router

Router.get('/api/prime_numbers', 'primenumbers#show')
