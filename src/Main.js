import WebSocketClient from './WebSocketClient'

export default {
  install: (app, connection, options) => {
    const socketClient = new WebSocketClient(connection, options)
    socketClient.connect()
    app.config.globalProperties.$socketClient = socketClient
  }
}
