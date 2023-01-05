class Api {
  async postJson({ data, headers, path }) {
    const url = `https://dev.pretrained-app.ru/api/${path}`
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
