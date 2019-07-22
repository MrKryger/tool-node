let express = require('express');
let router  = express.Router();
let middleware = require('../app/Controller/HeaderController')
let RestModel = require('../app/Modul/Rest')

console.log('RestRouter')
router.all('/index', middleware, RestModel.items)
router.all('/index/:id/', middleware, RestModel.item)

module.exports = router;
