class Api {
  async postJson({ data, headers, path }) {
    const API_DOMAIN = 'https://staging-pretrained-app.jsdev.cyou'
    const API_HOST = '/api'
    const url = `${API_HOST}${path}`
    const body = JSON.stringify(data)
    console.log('postJson#5', { data })

    const response = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body,
    }).catch((error) => {
      console.log("Error: " + error)
    })

    console.log('fetchJson#17', { response })
    return response.json()
  }
}
