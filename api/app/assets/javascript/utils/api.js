class Api {
  // Этот класс содержит методы для выполнения HTTP запросов в API
  async postJson({ data, headers, path }) {
    const API_HOST = '/api'
    const url = `${API_HOST}${path}`
    const body = JSON.stringify(data)

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
      console.error(`Error: ${error}`)
    })

    return response.json()
  }
}
