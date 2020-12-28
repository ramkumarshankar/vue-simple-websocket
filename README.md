# vue-simple-websocket

A simple native reconnecting websocket client for Vue.js.

__If you like or use this project, please consider supporting my work. Thanks! 🙏🏼__

<a href="https://www.buymeacoffee.com/ramkumarshankar" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" width=217 height=51 style="height: 51px !important;width: 217px !important;"></a>

# Usage instructions

These instructions are for usage with Vue 3.x. 

For usage information with Vue 2.x, see [here](https://github.com/ramkumarshankar/vue-simple-websocket/blob/master/docs/usage-with-vue-2.x.md). The older version will not receive updates.

# Install

```
npm install vue-simple-websocket --save
```

# Basic Usage

In the Vue app entry file `main.js`
```js
import VueSimpleWebsocket from "vue-simple-websocket";

const app = createApp(App);
// Configure the server to connect to and reconnection parameters
// Here, we enable reconnection and retry every 5s if connection is lost
app.use(VueSimpleWebsocket, "wss://echo.websocket.org", {
    reconnectEnabled: true,
    reconnectInterval: 5000
});
app.mount("#app");
```

# Usage in Vue components

The plugin adds a `$socketClient` to your app.

In your components, you can handle websocket events by setting them up in the `created` or `mounted` hook.
- `onOpen` — event when socket is connected
- `onMessage` — event when socket receives a message
- `onClose` — event when socket is closed
- `onError` — event when socket is closed abnormally

If the connection is broken, the event handlers will continue to work when reconnection succeeds.

```js
// Component.vue
export default {
  name: 'Component',
  //
  created () {
    this.$socketClient.onOpen = () => {
      console.log('socket connected')
    }
    this.$socketClient.onMessage = msg => {
      console.log(JSON.parse(msg.data))
    }
    this.$socketClient.onClose = () => {
      console.log('socket closed')
    }
    this.$socketClient.onError = () => {
      console.log('socket error')
    }
  }
}
```

# Sending messages

`send()`
This calls the websocket `send` method and can be used for sending string data.

```js
let data = {
  type: 'message',
  text: 'hello there'
}
this.$socketClient.send(JSON.stringify(data))
```

`sendObj()`

A convenience method `sendObj` is available for sending javascript objects:

```js
let data = {
  type: 'message',
  text: 'hello there'
}
this.$socketClient.sendObj(data)
```

### Some important information

### TLDR 
This package is under development, and I'm still learning how maintaining and and publishing npm packages work. If you have more experience in building and maintaining javascript modules, I'd love to hear from you.

#### The slightly longer version

This is based on a simple websocket plugin that I wrote for my projects, which I am now releasing as a Vue.js plugin. 

This is also a personal project to learn how to build and publish packages on npm. I have deliberately started with a repository from the ground up (instead of going with a template starter) in order to get my hands dirty setting up various components such as `babel`, `rollup` as well as tests using `jest`. As you can probably tell, there is a fair bit of work that needs to be done in order to make this package robust and maintainable.

I'd be super grateful to get pointers from folks who have more experience building and maintaining packages on npm. :)
