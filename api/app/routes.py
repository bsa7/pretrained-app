''' API Router settings file '''

from app.lib.router import get, post

# API endpoints
post('/api/welcome/start', 'welcome#start')
post('/api/mental_counting/recognize_speech', 'mentalcounting#recognize_speech')
post('/api/classify_image', 'classifier#classify_image')
post('/api/summarize_text', 'summarization#summarize_text')

# HTTP pages
get('/welcome', 'welcome#index')
get('/image_classifier', 'classifier#index')
get('/summarization', 'summarization#index')
get('/show', 'classifier#show')
get('/mental_counting', 'mentalcounting#index')
