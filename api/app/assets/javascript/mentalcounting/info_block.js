class InfoBlock {
  constructor(selector) {
    this.container = document.querySelector(selector)
    this.rows = []
    this.blockSize = 10 // Максимум 10 строк
  }

  push(text) {
    const row = this.row(text)
    this.rows.push(row)
    this.container.appendChild(row.element)
    this.shift()
  }

  shift() {
    if (this.rows.length > this.blockSize) {
      const deletedRow = this.rows.shift()
      const rowId = deletedRow.id
      const deletedRowElement = this.container.querySelector(`#${rowId}`)
      if (deletedRowElement !== null) {
        deletedRowElement.remove()
      }
    }
  }

  row(innerHTML) {
    const rowElement = document.createElement('div')
    rowElement.classList.add('info-block--row')
    rowElement.id = this.randomId()
    rowElement.innerHTML = innerHTML
    return { element: rowElement, id: rowElement.id }
  }

  randomId() {
    return `row-${btoa(Math.random().toString()).substring(10, 15)}`
  }
}
