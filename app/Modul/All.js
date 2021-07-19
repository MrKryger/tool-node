let AllController = require('../../app/AllController')

module.exports.All = function(req, res) {
  console.log('All0')
  let items = AllController.prototype.index(req.body)
  res.json(items)
}
