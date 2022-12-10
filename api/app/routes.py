''' API Router settings file '''

from app.lib.router import get, post

# API endpoints
post('/api/welcome/start', 'welcome#start')
get('/api/mental_counting/audio', 'mentalcounting#audio')

# HTTP pages
get('/welcome', 'welcome#index')
get('/image_classifier', 'classifier#index')
get('/summarization', 'summarization#index')
get('/show', 'classifier#show')
get('/mental_counting', 'mentalcounting#index')
