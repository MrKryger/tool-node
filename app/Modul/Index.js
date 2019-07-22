let fs      = require('fs');
let path    = require('path')

module.exports.All = function(req, res) {
    res.json({message:'Home page '})
}

module.exports.Load = function(req, res) {
  // console.log(req.body, 'Body');
  console.log(req.files, 'files');
  console.log('Load')
  console.log(req.body)
  let items = {
    message: 'load'
  }
  res.json(items);
}

module.exports.Uploads = function(req, res) {
  let notes = '../../uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg'
  const fileName = path.resolve(__dirname, notes);
  const readStream = fs.createReadStream(fileName);
  readStream.pipe(res);
}





// module.exports.uploadAvatar = function(req, res) {
//   var filePath = req.files[0].path
//   var username = req.params.username
//
//   async.autoInject({
//     avatar: function(callback) {
//       gm(filePath).resize(100, 100, '!').toBuffer('png', callback)
//     },
//     writeDB: function(avatar, callback) {
//       User.findOneAndUpdate({ username: username }, { avatar: avatar }, { new: true }, callback)
//     }
//   }, function(err, results) {
//     fs.unlink(filePath, function() {})
//
//     if (err) {
//       return res.status(500).json({ error: err })
//     }
//
//     if (!results.writeDB) {
//       return res.sendStatus(404)
//     }
//
//     res.type('png')
//     res.send(results.writeDB.avatar)
//   })
// }
