# Install

Use the older version of the package for Vue 2.x.

Note that this release will no longer release updates. I'm going to focus development on supporting Vue 3.x features. 

```
npm install vue-simple-websocket@0.0.3 --save
```

# Basic Usage

In the Vue app entry file `main.js`
```js
import VueSimpleWebSocket from 'vue-simple-websocket'

Vue.use(VueSimpleWebSocket, 'wss://echo.websocket.org')
```

# Enable Reconnection
In the Vue app entry file `main.js`
```js
Vue.use(VueSimpleWebSocket, 'wss://echo.websocket.org', {
  reconnectEnabled: true,
  reconnectInterval: 5000 // time to reconnect in milliseconds
})
```

# Usage

You will then have a `$socketClient` instance in your Vue instance. 

Follow the instructions in the [Readme](https://github.com/ramkumarshankar/vue-simple-websocket/blob/master/README.md) to send and receive messages.