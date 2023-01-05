class AudioStream {
  constructor(triggerButton) {
    this.chunks = []
    this.microphone
    this.mediaRecorder
    this.stream
    this.recording = false
    this.triggerButton = triggerButton
    this.audioStreamVisualizer
    this.audioStreamAnalyzer
    this.api = new Api()
    this.mimeType = 'audio/webm;codecs=opus'
    this.audioHeaders = {
      'Content-Type': 'application/octet-stream'
    }

    this.initialize()
  }

  async initialize() {
    await this.queryAccessToMicrophone()
    this.initializeMediaRecorder(this.stream)
    this.initializeAudioStreamVisualizer(this.stream)
    this.initializeAudioStreamAnalyzer(this.stream)
    this.triggerButton.addEventListener('click', this.trigger.bind(this))
  }

  initializeAudioStreamVisualizer(stream) {
    this.audioStreamVisualizer = new AudioStreamVisualizer(stream)
  }

  initializeAudioStreamAnalyzer(stream) {
    this.audioStreamAnalyzer = new AudioStreamAnalyzer(stream, this.onSpeechStart.bind(this), this.onSpeechEnd.bind(this))
  }

  onSpeechStart() {
    // console.log('speech start')
    this.mediaRecorder.start()
  }

  onSpeechEnd() {
    // console.log('speech end')
    this.mediaRecorder.stop()
  }

  async queryAccessToMicrophone() {
    const audioCtx = new AudioContext();
    if (navigator.mediaDevices) {
      await navigator.mediaDevices.getUserMedia({ "audio": true }).then((stream) => {
        this.microphone = audioCtx.createMediaStreamSource(stream);
        this.stream = stream
        console.log('microphone can now act like any other AudioNode')
      }).catch((_err) => {
        console.error('browser unable to access microphone (check to see if microphone is attached)')
      });
    } else {
      console.log('browser unable to access media devices (update your browser)')
    }
  }

  initializeMediaRecorder(stream) {
    // Instantiate the media recorder.
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: this.mimeType });
    // Create a buffer to store the incoming data.
    this.chunks = []
    this.mediaRecorder.ondataavailable = this.mediaRecorderOnDataAvailable.bind(this)
    this.mediaRecorder.onstop = this.mediaRecorderOnStop.bind(this)
  }

  initializeMediaStream(stream) {

  }

  startRecording() {
    this.soundClipElement.replaceChildren()
    this.recording = true
    this.triggerButton.innerText = 'Stop Recording'
    this.mediaRecorder.start()
  }

  stopRecording() {
    this.recording = false
    this.triggerButton.innerText = 'Start Recording'
    this.mediaRecorder.stop()
  }

  trigger(_event) {
    if (this.recording) {
      this.stopRecording()
    } else {
      this.startRecording()
    }
  }

  mediaRecorderOnDataAvailable(event) {
    // console.log('ondataavailable#34', { 'event.data': event.data })
    this.chunks.push(event.data);
  }

  async mediaRecorderOnStop(event) {
    // Этот блок создаёт аудио элемент с возможностью скачивания
    // const blob = new Blob(this.chunks, { type: this.mimeType });
    // const audio = new Audio();
    // audio.setAttribute("controls", "");
    // this.soundClipElement.appendChild(audio)
    // audio.src = window.URL.createObjectURL(blob);

    // Этот блок отправляет аудио данные в API
    const audioJson = this.chunks
    const blob = new Blob(this.chunks, { type: this.mimeType })
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => {
      const base64String = reader.result
      console.log('mediaRecorderOnStop#98', { base64String })
      this.sendAudio(base64String)
      this.chunks = []; // clear buffer
    }
  }

  async sendAudio(base64Audio) {
    const response = await this.api.postJson({
      data: { audio: base64Audio, mimeType: this.mimeType, text: 'cong' },
      headers: this.audioHeaders,
      path: '/mental_counting/recognize_speech',
    })
    // console.log('mediaRecorderOnStop#98', { response })
    if (response.status == 'success') {
      document.querySelector('#recognition-result').innerText = response.text
    }
  }

  get soundClipElement() {
    return document.querySelector('#sound-clip')
  }
}
