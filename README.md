# vue-simple-websocket

A simple native reconnecting websocket client for Vue.js.

### Some important information

#### TLDR 
This package is under development, and I'm still learning how maintaining and and publishing npm packages work. If you have more experience in building and maintaining javascript modules, I'd love to hear from you.

#### The slightly longer version

This is based on a simple websocket plugin that I wrote for my projects, which I am now releasing as a Vue.js plugin. 

This is also a personal project to learn how to build and publish packages on npm. I have deliberately started with a repository from the ground up (instead of going with a template starter) in order to get my hands dirty setting up various components such as `babel`, `rollup` as well as tests using `jest`. As you can probably tell, there is a fair bit of work that needs to be done in order to make this package robust and maintainable.

I'll be super grateful to get pointers from folks who have more experience building and maintaining packages on npm.

# Install

```
npm install vue-simple-websocket --save
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

At the moment, these are the only two options which are available.

# Usage in Vue components

The plugin adds a `$socketClient` to your Vue instance.

In your components, you can handle websocket events by setting them up in the `created` or `mounted` hook.
- `onOpen` — event when socket is connected
- `onMessage` — event when socket receives a message
- `onClose` — event when socket is closed
- `onError` — event when socket is closed abnormally

```js
// Component.vue
export default {
  name: 'Component',
  //
  created () {
    this.$socketClient.onOpen = () => {
      console.log('socket connected')
    }
    this.$socketClient.onMessage = (msg) => {
      console.log(JSON.parse(msg.data))
    }
    this.$socketClient.onClose = (msg) => {
      console.log('socket closed')
    }
    this.$socketClient.onError = (msg) => {
      console.log('socket error')
    }
  }
}
```

# Sending messages

```js
let data = {
  type: 'message',
  text: 'hello there'
}
this.$socketClient.send(JSON.stringify(data))
```

`sendObj`

A convenience method `sendObj` is available for sending javascript objects

```js
let data = {
  type: 'message',
  text: 'hello there'
}
this.$socketClient.sendObj(data)
```






