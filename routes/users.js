let express = require('express');
let router = express.Router();
let User = require('../app/UserController')
let Users = require('../app/UsersController')
let header = require('../config/header')


/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  
  let items = UserController.index()
  res.json(items);
});

router.post('/add', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  
  let items = User.prototype.create(req)
  res.json(items);
});

router.get('/:id', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  
  let items = UserController.read(req)
  res.json(items);
});

router.patch('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  
  let items = UserController.update(req)
  res.json(items);
});

router.delete('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  
  let items = UserController.destroy(req)
  res.json(items);
  // console.log(req.headers)
  // console.log(req.body)
});

module.exports = router;
