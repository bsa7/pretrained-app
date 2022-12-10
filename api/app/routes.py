''' API Router settings file '''

from app.lib.router import get, post

# API endpoints
post('/api/welcome/start', 'welcome#start')

# HTTP pages
get('/welcome', 'welcome#index')
get('/image_classifier', 'classifier#index')
get('/show', 'classifier#show')
