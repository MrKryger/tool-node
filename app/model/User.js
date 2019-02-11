const db = require('../../db')

function getData (query, done) {
  db.query(query, function (err, data, fields) {
    let res
    if (err) {
      res = {
        data: {},
        res: false,
        error: 'Error database',
      }
    } else {
      res = {
        data: data,
        res: true,
        error: '',
      }
    }
    
    done(res)
  })
}

module.exports = {getData}
