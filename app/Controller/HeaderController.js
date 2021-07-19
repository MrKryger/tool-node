let header = [
  ['Content-Type', 'application/json'],
  ['Access-Control-Allow-Origin', '*'],
  ['Access-Control-Allow-Headers', 'content-type'],
  ['Access-Control-Request-Method', 'POST']
]

let headerResource = function(req, res, next) {
  if (!req.body) return res.sendStatus(400)
  res.set(...header[0])
  res.set(...header[1]);
  res.set(...header[2]);
  res.set(...header[3]);
  return next()
}

module.exports = function(req, res, next) {
  console.log('headerResource')

  headerResource(req, res, next)
  console.log('headerResource 1')

}
