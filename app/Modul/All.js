let AllController = require('../../app/AllController')

module.exports.All = function(req, res) {
  let items = AllController.prototype.index(req.body)
  let result = {
    data:items,
    code: 1,
    mess: ''
  }
  res.json(result)
}
