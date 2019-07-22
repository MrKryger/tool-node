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
      case 'upload':
        return this.upload(data.params)
      case 'image':
        return this.image()
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
  upload (data) {
    console.log(data.params, 'upload')

    return data
  }

  image () {
    console.log('image')
    let a = {url: 'http://localhost:3000/uploads/3785b7636cb8001fa1f4b86933a26686'}
    return a
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
