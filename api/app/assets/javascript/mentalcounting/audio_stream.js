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
    this.initialize()
  }

  async initialize() {
    await this.queryAccessToMicrophone()
    // console.log('initialize#12', { 'this.stream': this.stream })
    this.initializeMediaRecorder(this.stream)
    this.initializeAudioStreamVisualizer(this.stream)
    this.initializeAudioStreamAnalyzer(this.stream)
    this.triggerButton.addEventListener('click', this.trigger.bind(this))
  }

  initializeAudioStreamVisualizer(stream) {
    this.audioStreamVisualizer = new AudioStreamVisualizer(stream)
  }

  initializeAudioStreamAnalyzer(stream) {
    this.audioStreamAnalyzer = new AudioStreamAnalyzer(stream)
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
    this.mediaRecorder = new MediaRecorder(stream);
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

  mediaRecorderOnStop(event) {
    // console.log('mediaRecorderOnStop#45', { event })
    // A "blob" combines all the audio chunks into a single entity
    const audio = new Audio();
    audio.setAttribute("controls", "");
    this.soundClipElement.appendChild(audio)

    // Combine the audio chunks into a blob, then point the empty audio clip to that blob.
    const blob = new Blob(this.chunks, {"type": "audio/ogg; codecs=opus"});
    audio.src = window.URL.createObjectURL(blob);
    this.chunks = []; // clear buffer
  }

  get soundClipElement() {
    return document.querySelector('#sound-clip')
  }
}
