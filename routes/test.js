let express = require('express')
let router = express.Router()
let User = require('../app/TestController')
let header = require('../config/header')


/* GET users listing. */
router.all('/', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  // let items = User.prototype.index()
  // res.json(items);

 
})

module.exports = router
