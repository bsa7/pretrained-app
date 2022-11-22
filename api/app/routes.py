''' API Router settings file '''

from app.lib.router import get, post

# API endpoints
get('/api/prime_numbers', 'primenumbers#show')
post('/api/welcome/start', 'welcome#start')

# HTTP pages
get('/welcome', 'welcome#index')
