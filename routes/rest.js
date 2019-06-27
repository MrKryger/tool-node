let express = require('express')
let router = express.Router()
let RestController = require('../app/RestController')
let header = require('../config/header')


/* GET users listing. */
router.all('/index/', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  let items = RestController.prototype.index();

  res.json(items);
})

router.all('/index/:id/', function (req, res, next) {
    if (!req.body) return res.sendStatus(400)
    res.set(...header[0])
    res.set(...header[1]);
    res.set(...header[2]);
    res.set(...header[3]);
    let items = RestController.prototype.show(req.body.id);
    // let items = Data.prototype.show(req.params.id);
    res.json(items);
})

module.exports = router
