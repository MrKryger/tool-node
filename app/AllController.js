class AllController {
  constructor (data) {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (data) {
    console.log(data)
    switch (data.method) {
      case 'info':
        return this.info()
      case 'item':
        return this.item(data.params)
      default:
        return this.default()
    }
  }

  info () {
    let json = require('../json/settings')
    return json
  }

  item (data) {
    return data
  }

  default () {
    let json = {
      'id': '100500',
      'jsonrpc': '2.0',
      'result': {
        method: 'default'
      }
    }
    return json
  }
}

module.exports = AllController
