class AudioStreamAnalyzer {
  constructor(stream, onSpeechStart, onSpeechEnd) {
    console.log('audioStreamAnalyzer#3')
    this.statusBlock = document.querySelector('.noise-status')
    this.stream = stream
    this.audioCtx
    this.analyser
    this.maxSilenceLevel = 133     //
    this.minSilenceLevel = 121     //
    this.maxSilenceInterval = 500 // milliseconds
    this.speechMode = false // Trigger: silence: false or speech: true
    this.setSilenceModeTimeoutId
    this.onSpeechStart = onSpeechStart
    this.onSpeechEnd = onSpeechEnd
    this.analyze()
  }

  analyze = () => {
    if(!this.audioCtx) {
      this.audioCtx = new AudioContext();
    }

    const source = this.audioCtx.createMediaStreamSource(this.stream);
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 2048;
    this.analyser.minDecibels = -55
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);

    source.connect(this.analyser);

    this.iter()
  }

  iter = () => {
    requestAnimationFrame(this.iter);
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.detectMode()
  }

  detectMode() {
    const minNoise = Math.min.apply(Math, this.dataArray)
    const maxNoise = Math.max.apply(Math, this.dataArray)
    let speechMode = minNoise <= this.minSilenceLevel || maxNoise >= this.maxSilenceLevel
    this.changeSpeechMode(speechMode)
  }

  changeSpeechMode(newSpeechMode) {
    if (newSpeechMode === true) {
      this.clearSetSilenceModeTimeout()
      this.updateSpeechMode(true)
    } else {
      this.setSilenceModeTimeout()
    }
  }

  clearSetSilenceModeTimeout() {
    if (this.setSilenceModeTimeoutId !== null) {
      clearTimeout(this.setSilenceModeTimeoutId)
      this.setSilenceModeTimeoutId = null
    }
  }

  setSilenceModeTimeout() {
    if (this.setSilenceModeTimeoutId === null) {
      this.setSilenceModeTimeoutId = setTimeout(this.setSilenceMode.bind(this), this.maxSilenceInterval)
    }
  }

  setSilenceMode() {
    this.updateSpeechMode(false)
  }

  updateSpeechMode(newSpeechMode) {
    if (this.speechMode === newSpeechMode) return

    this.speechMode = newSpeechMode
    if (this.speechMode === true) {
      this.onSpeechStart()
    } else {
      this.onSpeechEnd()
    }

    this.visualizeSoundMode()
  }

  visualizeSoundMode() {
    this.statusBlock.innerHTML = this.speechMode ? 'Речь' : 'Тишина'
  }
}
