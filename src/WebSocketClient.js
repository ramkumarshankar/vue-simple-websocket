export default class WebSocketClient {
  constructor (url, options) {
    this.instance = null
    this.url = url
    this.reconnectEnabled = options.reconnectEnabled || false
    this.reconnectInterval = options.reconnectInterval

    // These methods should be defined by components
    this.onOpen = null
    this.onMessage = null
    this.onClose = null
    this.onError = null
  }

  connect () {
    this.instance = new WebSocket(this.url)

    // Socket event listeners
    // Each event handler also calls the corresponding class method, which can be defined by the component
    this.instance.onopen = () => {
      console.log('instance open')
      if (typeof this.onOpen === 'function') {
        this.onOpen()
      }
    }
    this.instance.onmessage = (msg) => {
      if (typeof this.onMessage === 'function') {
        this.onMessage(msg)
      }
    }
    this.instance.onclose = (evt) => {
      console.log('on instance close')
      if (typeof this.onClose === 'function') {
        this.onClose(evt)
      }
      if (!evt.wasClean && this.reconnectEnabled) {
        this.reconnect()
      }
    }
    this.instance.onerror = (evt) => {
      console.log('on instance error')
      if (typeof this.onError === 'function') {
        this.onError(evt)
      }
    }
  }

  reconnect () {
    delete this.instance
    console.log('WebsocketClient: retry in ' + this.reconnectInterval + 'ms')
    setTimeout(() => {
      console.log('WebsocketClient reconnecting...')
      this.connect()
    }, this.reconnectInterval)
  }

  sendObj (data) {
    this.instance.send(JSON.stringify(data))
  }

  removeListeners () {
    console.log('remove listeners')
    this.onOpen = null
    this.onMessage = null
    this.onClose = null
    this.onError = null
  }
}
