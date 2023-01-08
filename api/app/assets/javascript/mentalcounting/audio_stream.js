class AudioStream {
  // Этот класс контролирует аудио-поток, получаемый с микрофона,
  // Определяет начала и окончания фраз
  // И визуализирует звук в виде круговой гистограммы (в верхнем правом углу экрана)
  constructor() {
    this.chunks = []
    this.microphone
    this.mediaRecorder
    this.stream
    this.recording = false
    this.audioStreamVisualizer
    this.audioStreamAnalyzer
    this.api = new Api()
    this.infoBlock = new InfoBlock('#recognition-result')
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
  }

  initializeAudioStreamVisualizer(stream) {
    // Инициализация блока с визуализацией звука, фиксируемого на микрофон
    this.audioStreamVisualizer = new AudioStreamVisualizer(stream)
  }

  initializeAudioStreamAnalyzer(stream) {
    // Инициализация анализатора звука с микрофона, который нарезает поток на фразы
    this.audioStreamAnalyzer = new AudioStreamAnalyzer(stream, this.onSpeechStart.bind(this), this.onSpeechEnd.bind(this))
  }

  onSpeechStart() {
    this.mediaRecorder.start()
  }

  onSpeechEnd() {
    this.mediaRecorder.stop()
  }

  async queryAccessToMicrophone() {
    // Этот метод запрашивает у пользователя разрешение на доступ к микрофону и инициализирует приём аудио потока
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
    // Создаётся экземпляр медиа рекордера, который обрабатывает поступающий звук с микрофона в данные
    this.mediaRecorder = new MediaRecorder(stream, { mimeType: this.mimeType });
    this.chunks = []
    this.mediaRecorder.ondataavailable = this.mediaRecorderOnDataAvailable.bind(this)
    this.mediaRecorder.onstop = this.mediaRecorderOnStop.bind(this)
  }

  mediaRecorderOnDataAvailable(event) {
    this.chunks.push(event.data);
  }

  async mediaRecorderOnStop(event) {
    // Этот конвертирует аудио данные в строку и отправляет запрос в API
    const audioJson = this.chunks
    const blob = new Blob(this.chunks, { type: this.mimeType })
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => {
      const base64String = reader.result
      this.sendAudio(base64String)
      this.chunks = []; // Очищает буфер
    }
  }

  async sendAudio(base64Audio) {
    // Этот метод отправляет аудиоданные, в виде base64 кодированной строки в api
    const response = await this.api.postJson({
      data: { audio: base64Audio, mimeType: this.mimeType, text: 'cong' },
      headers: this.audioHeaders,
      path: '/mental_counting/recognize_speech',
    })
    console.log(response)
    if (response.status == 'success') {
      this.infoBlock.push(response.text)
    }
  }
}
