let RestController = require('../../app/RestController')

module.exports.items = function(req, res) {
  let items = RestController.prototype.index(req.body);
  res.json(items);
}

module.exports.item = function(req, res) {
  let items = RestController.prototype.show(req.body.id);
  res.json(items);
}
