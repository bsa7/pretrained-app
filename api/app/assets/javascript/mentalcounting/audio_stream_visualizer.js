class AudioStreamVisualizer {
  constructor(stream) {
    this.stream = stream
    this.canvas = document.querySelector('.visualizer')
    this.canvasCtx = this.canvas.getContext('2d')
    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.audioCtx
    this.analyser
    this.visualize()
  }

  visualize = () => {
    if(!this.audioCtx) {
      this.audioCtx = new AudioContext()
    }

    const source = this.audioCtx.createMediaStreamSource(this.stream)
    this.analyser = this.audioCtx.createAnalyser()
    this.analyser.fftSize = 2048
    this.bufferLength = this.analyser.frequencyBinCount
    this.dataArray = new Uint8Array(this.bufferLength)

    source.connect(this.analyser)

    this.draw()
  }

  draw = () => {
    const WIDTH = this.canvas.width
    const HEIGHT = this.canvas.height

    requestAnimationFrame(this.draw)

    this.analyser.getByteTimeDomainData(this.dataArray)

    this.canvasCtx.fillStyle = 'rgb(255, 255, 255)'
    this.canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)

    this.canvasCtx.lineWidth = 2
    this.canvasCtx.strokeStyle = 'rgb(0, 0, 0)'

    this.canvasCtx.beginPath()

    for(let i = 0; i < this.bufferLength; i++) {
      let v = this.dataArray[i] / 128.0 * HEIGHT / 2
      let angle = (i / this.bufferLength) * 2 * Math.PI
      let x = WIDTH / 2 + v * Math.cos(angle)
      let y = HEIGHT / 2 + v * Math.sin(angle)
      if(i === 0) {
        this.canvasCtx.moveTo(x, y)
      } else {
        this.canvasCtx.lineTo(x, y)
      }
    }
    this.canvasCtx.stroke()
  }
}
