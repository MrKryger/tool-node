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



let Socket = require('./app/SocketController')

const wss = new WebSocket.Server({ port: 3003 })
wss.on('connection', function connection (ws) {
  ws.on('message', function incoming(message) {
    Socket.prototype.created(message)
  });

  setInterval(function timeout () {
    const json = JSON.stringify(Socket.prototype.index())
    ws.send(json)
  }, 5000)
})


// let url = '127.0.0.1'
let url = 'localhost'
let port = 3000
app.listen(port, url)
