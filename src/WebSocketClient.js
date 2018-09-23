export default class WebSocketClient {
  constructor (url, options) {
    this.instance = null
    this.url = url
    this.options = options || this.defaultOptions()
    if (this.options) {
      this.reconnectEnabled = options.reconnectEnabled || false
      if (this.reconnectEnabled) {
        this.reconnectInterval = options.reconnectInterval
      }
    }
    // These methods should be defined by components
    this.onOpen = null
    this.onMessage = null
    this.onClose = null
    this.onError = null
  }

  defaultOptions () {
    return {
      reconnectEnabled: false,
      reconnectInterval: 0
    }
  }

  connect () {
    this.instance = new WebSocket(this.url)

    // Socket event listeners
    // Each event handler also calls the corresponding class method, which can be defined by the component
    this.instance.onopen = () => {
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
      if (typeof this.onClose === 'function') {
        this.onClose(evt)
      }
      if (!evt.wasClean && this.reconnectEnabled) {
        this.reconnect()
      }
    }
    this.instance.onerror = (evt) => {
      if (typeof this.onError === 'function') {
        this.onError(evt)
      }
    }
  }

  reconnect () {
    delete this.instance
    setTimeout(() => {
      this.connect()
    }, this.reconnectInterval)
  }

  sendObj (data) {
    this.instance.send(JSON.stringify(data))
  }

  removeListeners () {
    this.onOpen = null
    this.onMessage = null
    this.onClose = null
    this.onError = null
  }
}
