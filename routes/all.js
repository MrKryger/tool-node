let express = require('express')
let router = express.Router()
let User = require('../app/AllController')
let header = require('../config/header')


/* GET users listing. */
router.all('/', function (req, res, next) {
    if (!req.body) return res.sendStatus(400)
    res.set(...header[0])
    res.set(...header[1]);
    res.set(...header[2]);
    res.set(...header[3]);


    let items = User.prototype.index();

    res.json(items);
})

 router.all('/statusmap', function (req, res, next) {
    if (!req.body) return res.sendStatus(400)
    res.set(...header[0])
    res.set(...header[1]);
    res.set(...header[2]);
    res.set(...header[3]);
    let items =  User.prototype.statusmap();
    res.json(items);
})


router.all('/filesystems-get', function (req, res, next) {
    if (!req.body) return res.sendStatus(400)
    res.set(...header[0])
    res.set(...header[1]);
    res.set(...header[2]);
    res.set(...header[3]);

    let items = User.prototype.filesystems();

    res.json(items);
})


router.all('/filesystems-list/:id/', function (req, res, next) {
    if (!req.body) return res.sendStatus(400)
    res.set(...header[0])
    res.set(...header[1]);
    res.set(...header[2]);
    res.set(...header[3]);

    let items = User.prototype.list(req.params.id);

    res.json(items);
})

router.all('/exp', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  let items = User.prototype.exp();

  res.json(items);
})

// router.all('/pools-list/:id/', function (req, res, next) {
//     if (!req.body) return res.sendStatus(400)
//     res.set(...header[0])
//     res.set(...header[1]);
//     res.set(...header[2]);
//     res.set(...header[3]);
//     let items = User.prototype.pools(req.params.id);
//
//     res.json(items);
// })





module.exports = router
