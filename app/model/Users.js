const db = require('../../db')

function index (done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

function create (request,done) {
  db.query(`INSERT INTO node.users 
  (first_name,last_name,age,birthday,email,phone,rating,) 
  VALUES 
  (${request.first_name},${request.last_name},${request.age},${request.birthday},${request.email},${request.phone},${request.rating})`,
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

function store (request,done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}
// $id
function show (id,done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}
// $id
function edit (request,id,done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}
// request, $id
function update (request,id,done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}
// $id
function destroy (id,done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

module.exports = {getData}
