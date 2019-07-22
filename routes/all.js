let express = require('express');
let router  = express.Router();
let middleware = require('../app/Controller/HeaderController')
let AllModel = require('../app/Modul/All')

console.log('AllRouter')
router.all('/', middleware, AllModel.All)

module.exports = router;
