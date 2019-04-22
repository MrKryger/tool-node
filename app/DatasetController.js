// const json = require('../json/all');

class DatasetController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (id) {
    let json = require('../json/filesystems-list')
    return json
  }

  created () {
    let json = {
      status: 'OK'
    }
    return json
  }

  show (id) {
    let json = require('../json/filesystems-get')
    return json
  }

  update (id, body) {
    let json = {
      status: 'OK'
    }
    return json
  }

  destroy (id) {
    let json = {
      status: 'OK'
    }
    return json
  }

}

module.exports = DatasetController
