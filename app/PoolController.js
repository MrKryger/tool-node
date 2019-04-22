// const json = require('../json/all');

class PoolController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (id) {
    let json = require('../json/pools-list')

    return json[id]
  }

  created () {
    return {
      status: 'OK'
    }
  }

  show (id) {
    let json = require('../json/pool')
    return json
  }

  update (id, body) {
    return {
      status: 'OK'
    }
  }

  destroy (id) {
    let json = {
      status: 'OK'
    }
    return json
  }

}

module.exports = PoolController
