const WebSocket = require('ws')
// controller websocket
const Socket = require('../app/SocketController')

const wss = new WebSocket.Server({ port: 3003 })
wss.on('connection', function connection (ws) {
  ws.on('message', function incoming (message) {
    sendMessage(ws, message)
    console.log(message, 'message')
  })
  sendIndex(ws)

  function sendIndex (ws) {
    waitForSocketConnection(ws, function () {
      const json = JSON.stringify(Socket.prototype.index())
      ws.send(json)
    })
  }

  function sendMessage (ws, msg) {
    waitForSocketConnection(ws, function () {
      const json = JSON.stringify(Socket.prototype.show(msg))
      ws.send(json)
    })
  }

// Make the function wait until the connection is made...
  function waitForSocketConnection (socket, callback) {
    setTimeout(
      function () {
        console.log('-')
        if (socket.readyState === 1) {
          console.log('Connection is made')
          if (callback != null) {
            callback()
          }
        } else {
          console.log('wait for connection...')
          waitForSocketConnection(socket, callback)
        }

      }, 5) // wait 5 milisecond for the connection...
  }

})

exports.wss = wss
