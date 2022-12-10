class AudioStreamVisualizer {
  constructor(stream) {
    this.stream = stream
    this.canvas = document.querySelector('.visualizer')
    this.canvasCtx = this.canvas.getContext('2d')
    this.canvasCtx.fillStyle = "blue";
    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.audioCtx
    this.analyser
    this.max_silence_level = 130     //
    this.min_silence_level = 120     //
    this.max_silence_interval = 1000 // milliseconds
    this.visualize()
  }

  visualize = () => {
    if(!this.audioCtx) {
      this.audioCtx = new AudioContext();
    }

    const source = this.audioCtx.createMediaStreamSource(this.stream);
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 2048;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);

    source.connect(this.analyser);
    //analyser.connect(audioCtx.destination);

    this.draw()
  }

  draw = () => {
    const WIDTH = this.canvas.width
    const HEIGHT = this.canvas.height;

    requestAnimationFrame(this.draw);

    this.analyser.getByteTimeDomainData(this.dataArray);
    // console.log('draw#37', { 'Math.min(this.dataArray)': Math.min.apply(Math, this.dataArray), 'Math.max(this.dataArray)': Math.max.apply(Math, this.dataArray) })
    // console.log(this.dataArray)

    this.canvasCtx.fillStyle = 'rgb(255, 255, 255)';
    this.canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.strokeStyle = 'rgb(0, 0, 100)';

    this.canvasCtx.beginPath();

    let sliceWidth = WIDTH * 1.0 / this.bufferLength;
    let x = 0;


    for(let i = 0; i < this.bufferLength; i++) {

      let v = this.dataArray[i] / 128.0;
      let y = v * HEIGHT/2;

      if(i === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.canvasCtx.lineTo(this.canvas.width, this.canvas.height/2);
    this.canvasCtx.stroke();
  }
}
