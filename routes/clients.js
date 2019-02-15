let express = require('express');
let router = express.Router();
let UserController = require('../app/UserController')

/* GET users listing. */
router.all('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set('Content-Type', 'application/json');
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "content-type,token");
  res.set("Access-Control-Request-Method", "POST");
  
  let items = UserController.prototype.index()
  res.json(items);
  // console.log(req.headers)
  // console.log(req.body)
});

module.exports = router;
