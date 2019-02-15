let express = require('express');
let router = express.Router();
let UserController = require('../app/UserController')
let UsersController = require('../app/UsersController')
let Users = require('../app/model/Users')
let header = require('../config/header')
let db = require('../db')


/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  
  UserController.index((result)=>{res.json(result)})

});

router.post('/add', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  let items = UserController.prototype.create(req)
  res.json(items);
});

router.get('/:id', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  let items = UserController.prototype.read(req)
  res.json(items);
});

router.patch('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  let items = UserController.prototype.update(req)
  res.json(items);
});

router.delete('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);

  let items = UserController.prototype.destroy(req)
  res.json(items);
  // console.log(req.headers)
  // console.log(req.body)
});

module.exports = router;
