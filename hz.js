const db = require('./db')

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

function getDataId (done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

function setData (done) {
  db.query('SELECT * FROM node.users',
    function (err, result, fields) {
      if (err) {
        throw err
      }
      done(result)
    }
  )
}

function getData (done) {
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
