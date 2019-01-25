let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json())
bodyParser.urlencoded({ extended: false });

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);


let url = '127.0.0.1'
let port = 3000;
app.listen(port,url,() => console.log(`- Network: ${url}:${port}`));
