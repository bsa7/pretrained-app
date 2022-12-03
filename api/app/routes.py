''' API Router settings file '''

from app.lib.router import get, post

# API endpoints
get('/api/prime_numbers', 'primenumbers#show')
post('/api/welcome/start', 'welcome#start')

# HTTP pages
get('/welcome', 'welcome#index')
get('/image_classifier', 'classifier#index')
get('/image_classifier_show', 'classifier#show')
# PP-27 Добавь тут свои роуты по аналогии
