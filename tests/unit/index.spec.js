import Vue from 'vue'
import VueSimpleWebSocket from 'Main'

import { Server } from 'mock-socket'

describe("index.js", () => {
  let mockServer
  it('can be bound to the onopen event', (done) => {
    mockServer = new Server('ws://localhost:8080')
    Vue.use(VueSimpleWebSocket, 'ws://localhost:8080', {
      reconnectEnabled: true,
      reconnectInterval: 5000
    })
    let vm = new Vue()
    vm.$socketClient.instance.onopen = (data) => {
      expect(data.type).toMatch('open')
      mockServer.stop(done)
    }
  })
})
