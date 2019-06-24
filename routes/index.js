let express = require('express');
let router = express.Router();
let header = require('../config/header')

/* GET users listing. */
router.all('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  // let items = Index.prototype.success()
  // let items = Index.prototype.error()

  // let items = true ? Index.prototype.success(): Index.prototype.error()
  let items = ['Hello front']
  res.json(items);
  // console.log(req.headers)
  // console.log(req.body)
});

module.exports = router;
