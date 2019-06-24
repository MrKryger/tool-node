// const json = require('../json/all');

class SocketController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (message) {
    console.log(message);
    const count = [0, 10, 20, 30, 40, 50, 60]
    const arr = [0]
    if (arr.length > 7) {
      arr.shift()
      arr.push(Math.floor(Math.random() * 50))
      var shifted = count.shift()
      count.push(shifted)
    } else {
      arr.push(Math.floor(Math.random() * 50))
    }
    var result = {
      'counts': count,
      'message': arr
    }
    return result
  }

  created (message) {
    console.log('received: %s', message);



  }

  show (id) {
    console.log(id);
    let json = require('../json/task')
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

module.exports = SocketController
