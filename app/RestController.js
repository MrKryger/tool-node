class RestController {
  constructor () {
    // this.id = 'id_1';
  }

  index () {
    // let json = require('../json/settings')
    let json = {
      'id': '1',
      'rest': '1.0',
      'result': {
        method: 'index'
      }
    }
    return json
  }

  created () {
    let json = {
      'id': '1',
      'rest': '1.0',
      'result': {
        method: 'created'
      }
    }
    return json
  }

  show (id) {
    let json = {
      'id': '1',
      'rest': '1.0',
      'result': {
        method: 'show',
        id: id,
      }
    }
    return json
  }

  update (id, body) {
    let json = {
      'id': '1',
      'rest': '1.0',
      'result': {
        method: 'update',
        id: id,
        body: body
      }
    }
    return json
  }

  destroy (id) {
    let json = {
      'id': '1',
      'rest': '1.0',
      'result': {
        method: 'destroy',
        id: id
      }
    }
    return json
  }

}

module.exports = RestController
