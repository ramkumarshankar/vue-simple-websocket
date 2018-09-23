import WebSocketClient from './WebSocketClient'

export default {

  install (Vue, connection, options) {
    const socketClient = new WebSocketClient(connection, options)
    socketClient.connect()
    Vue.prototype.$socketClient = socketClient
  }

}
