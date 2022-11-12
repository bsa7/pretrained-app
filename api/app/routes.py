''' API Router settings file '''

from app.lib.router import get

get('/prime_numbers', 'primenumbers#show')
