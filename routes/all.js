let express = require('express')
let router = express.Router()
let AllController = require('../app/AllController')
let header = require('../config/header')

router.all('/', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1])
  res.set(...header[2])
  res.set(...header[3])
  // console.log(req.body)
  // let items = new AllController(req.body);
  let items = AllController.prototype.index(req.body)
  res.json(items)
})

module.exports = router
