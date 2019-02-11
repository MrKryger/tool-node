const db = require('../../db')

function index (done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      let data = {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
      }


      done(data)
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

function read (request,done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

function update (request,id,done) {
  let query = `
  UPDATE node.users
  SET
  users.last_name = ${request.last_name},
  users.middle_name = ${request.middle_name}
  WHERE users.id = ${request.id}
  `

  db.query(query,function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

function destroy (id,done) {
  id = Number(id)
  let query = `DELETE FROM node.users WHERE users.id = ${id}`
  db.query(query,    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

module.exports = {index,create,read,update,destroy}
