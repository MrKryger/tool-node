let express = require('express')
let bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false })

app.use('/', require('./routes/index'))
app.use('/api/rpc', require('./routes/all'))
app.use('/api/rest', require('./routes/rest'))
//websocket
module.exports = require('./routes/ws');

let url = 'localhost'
let port = 3000
app.listen(port, url)
