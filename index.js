let express = require("express");
let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false });

let authorRouter = require('./routes/author');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let profileRouter = require('./routes/profile');
let clientsRouter = require('./routes/clients');
let reservationsRouter = require('./routes/reservations');

app.use('/api/login', authorRouter);
app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/profile', profileRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/reservations', reservationsRouter);

// miner
let statusRouter = require('./routes/miner/status');
let allRouter = require('./routes/miner/all');
app.use('/cgi-bin/get_miner_status.cgi', statusRouter);
app.use('/cgi-bin/all', allRouter);




let url = '127.0.0.1'
let port = 3000;
app.listen(port,url,() => console.log(`- Network: ${url}:${port}`));
