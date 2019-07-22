let express = require('express')
let bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false })

const WebSocket = require('ws')

let indexRouter = require('./routes/index')
let allRouter   = require('./routes/all')
let restRouter  = require('./routes/rest')

app.use('/', indexRouter)
app.use('/api/rpc', allRouter)
app.use('/api/rest', restRouter)

  // controller websocket
  const Socket = require('./app/SocketController')
  // webSocket
  const wss = new WebSocket.Server({ port: 3003 })
  wss.on('connection', function connection (ws) {
    ws.on('message', function incoming (message) {
      sendMessage(ws, message)
      console.log('ws.on(\'message\',')
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
          console.log("-")
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



// webSocket - end

let url = 'localhost'
let port = 3000
app.listen(port, url)
