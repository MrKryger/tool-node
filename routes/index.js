let express = require('express');
let router = express.Router();
let Index = require('../app/IndexController')

/* GET users listing. */
router.all('/', function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set('Content-Type', 'application/json');
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "content-type,token");
  res.set("Access-Control-Request-Method", "POST");
  
  // let items = Index.prototype.success()
  // let items = Index.prototype.error()
  
  let items = true ? Index.prototype.success(): Index.prototype.error()
  
  res.json(items);
  // console.log(req.headers)
  // console.log(req.body)
});

module.exports = router;
