class AudioStream {
  constructor() {
    this.microphone = null
    this.initialize()
  }

  initialize() {
    this.queryAccessToMicrophone()
  }

  queryAccessToMicrophone() {
    const audioCtx = new AudioContext();
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({"audio": true}).then((stream) => {
        this.microphone = audioCtx.createMediaStreamSource(stream);
        console.log('`microphone` can now act like any other AudioNode')
      }).catch((err) => {
        console.error('browser unable to access microphone (check to see if microphone is attached)')
      });
    } else {
      console.log('browser unable to access media devices (update your browser)')
    }
  }
}
