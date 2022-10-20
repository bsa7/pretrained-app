''' API Router '''
from mvc_flask import Router

Router.get('/prime_numbers', 'primenumbers#show')
