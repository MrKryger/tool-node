var mysql = require('mysql')


var connection;
let rer = true

if (rer) {
  // connection = mysql.createConnection('mysql://root@localhost:3306/node?debug=true')
  connection = mysql.createPool({
    connectionLimit : 3,
    host     : 'localhost',
    user     : 'node',
    password : 'password',
    port : '3306',
    database : 'node'
  })
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'node',
    password : 'password',
    port : '3306',
    database : 'node'
  });
}

// connection.connect()
//
// connection.query('SELECT * FROM node.users', function (err, rows, fields) {
//   console.log(rows)
//
//   if (err) throw err
//   console.log(rows)
//   console.log('The solution is: ', rows[0].solution)
// })
//
// connection.end()


// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId)
// });

module.exports = connection;
