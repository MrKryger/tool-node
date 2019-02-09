const db = require('./db')



function getData (done) {
  db.connect();
  db.query("SELECT * FROM node.users",
    function (err, result, fields) {
      if(err){
        throw err;
      }
      done(result);
      // db.end();
    }
  );
  // db.end();
}

module.exports = {getData}
