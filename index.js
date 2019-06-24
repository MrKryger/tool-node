let express = require('express')
const WebSocket = require('ws')

let app = express()

let bodyParser = require('body-parser')
app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false })

let allRouter = require('./routes/all')
let indexRouter = require('./routes/index')
let poolRouter = require('./routes/pool')
let dataRouter = require('./routes/dataset')

app.use('/', indexRouter)
app.use('/api/all', allRouter)
app.use('/api/pool/', poolRouter)
app.use('/api/dataset/', dataRouter)

// controller websocket
const Socket = require('./app/SocketController')
// webSocket

const wss = new WebSocket.Server({ port: 3003 })

wss.on('connection', function connection (ws) {
  ws.on('message', function incoming (message) {
    // Socket.prototype.created(message)

    setInterval(()=>sendMessage(ws,message), 1000)
  })



  function sendMessage(ws,msg){
    waitForSocketConnection(ws, function(){
      console.log("message sent!!!");
      const json = JSON.stringify(Socket.prototype.show(msg))
      ws.send(json)
    });
  }

// Make the function wait until the connection is made...
  function waitForSocketConnection(socket, callback){
    setTimeout(
      function () {
        if (socket.readyState === 1) {
          console.log("Connection is made")
          if (callback != null){
            callback();
          }
        } else {
          console.log("wait for connection...")
          waitForSocketConnection(socket, callback);
        }

      }, 50); // wait 5 milisecond for the connection...
  }

  // setInterval(function timeout () {
  //   const json = JSON.stringify(Socket.prototype.index())
  //   ws.send(json)
  // }, 5000)
})
// webSocket - end

// let url = '127.0.0.1'
let url = 'localhost'
let port = 3000
app.listen(port, url)
