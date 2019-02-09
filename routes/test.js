let express = require('express')
let router = express.Router()
let User = require('../app/TestController')
const hz = require('../hz')

/* GET users listing. */
router.all('/', function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set('Content-Type', 'application/json')
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'content-type,token')
  res.set('Access-Control-Request-Method', 'POST')

  // let items = User.prototype.index()
  // res.json(items);

  hz.getData(function (result) {
    console.log(result)
    res.json(
      {
        data: result,
        res: true,
        error: ''
      }
    )
  })
})

module.exports = router
