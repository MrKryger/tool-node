const User = require('./model/User')

class UsersController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};
  }

  index () {
    let query = `SELECT * FROM node.users`
    User.getData(query,function (result) {
      return result
    })

    // User.getData(query,(result) => result)
  }
  create (request) {
    let req = request
    User.create(req, function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  store (request) {
    let req = request
    User.store(req,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  show (request) {
    let id = request
    User.show(id,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  edit (request) {
    let id = request
    let req = request
    User.edit(req,id,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  update (request) {
    let id = request
    let req = request
    User.update(req,id,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  destroy (request) {
    let id = request
    User.destroy(id,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }

}

module.exports = UsersController
