let express = require('express');
let router  = express.Router();
let multer  = require('multer')
let upload  = multer({
  dest: './uploads/',
  limits: { fieldSize: 200000000, files: 1 }})

let middleware = require('../app/Controller/HeaderController')
let Index = require('../app/Modul/Index')

console.log('indexRouter')
router.all('/', middleware, Index.All)
router.all('/load', middleware, upload.any(), Index.Load)
router.get('/uploads/:id', middleware, Index.Uploads)

module.exports = router;
