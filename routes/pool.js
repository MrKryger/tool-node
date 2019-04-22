let express = require('express')
let router = express.Router()
let Pool = require('../app/PoolController')
let header = require('../config/header')


/* GET users listing. */
router.all('/list/:id', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  let items = Pool.prototype.index(req.params.id);

  res.json(items);
})

router.all('/item/:id/', function (req, res, next) {
    if (!req.body) return res.sendStatus(400)
    res.set(...header[0])
    res.set(...header[1]);
    res.set(...header[2]);
    res.set(...header[3]);
    let items = Pool.prototype.show(req.params.id);

    res.json(items);
})







module.exports = router
