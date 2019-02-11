const Users = require('./model/Users')
const User = require('./model/User')

class UserController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};

  }

   index () {
   let e =  Users.index(function (result) {
      console.log(result)
     this.roza = result
      return {
        data: result,
        res: true,
        error: '',
      }
    })
     console.log(`ee ${this.roza}`)

  }

  create (request) {
    let req = request
    Users.create(req, function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  store (request) {
    let req = request
    Users.store(req,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  show (request) {
    let id = request
    Users.show(id,function (result) {
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
    Users.edit(req,id,function (result) {
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
    Users.update(req,id,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }
  destroy (request) {
    let id = request
    Users.destroy(id,function (result) {
      return {
        data: result,
        res: true,
        error: '',
      }
    })
  }

}

module.exports = UserController
