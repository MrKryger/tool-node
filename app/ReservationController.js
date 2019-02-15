const Users = require('./model/Users')
const User = require('./model/User')

class ReservationController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};
    
  }
  
  index () {
    // let e =  Users.index(function (result) {
    //    console.log(result)
    //   this.roza = result
    //    return {
    //      data: result,
    //      res: true,
    //      error: '',
    //    }
    //  })
    //   console.log(`ee ${this.roza}`)
    
    let result = [
      {
        first_name: 'Red',
        last_name: 'Reds',
        middle_name: 'Redend',
        birthday: '2000-01-01',
        email: 'red@mail.ru',
        phone: '9006582343',
        rate: 4,
        notes: 'RedRedRedRedRedRedRed',
        wts:true,
        tel:false,
        vib:true,
      },
      {
        first_name: 'Black',
        last_name: 'Black',
        middle_name: 'Blackend',
        birthday: '2000-01-01',
        email: 'red@mail.ru',
        phone: '779006582343',
        rate: 1,
        notes: 'RedRedRedRedRedRedRed',
        wts:true,
        tel:false,
        vib:true,
      },
      {
        first_name: 'Green',
        last_name: 'Greens',
        middle_name: 'Greenend',
        birthday: '2000-01-01',
        email: 'red@mail.ru',
        phone: '79006582343',
        rate: 5,
        notes: 'RedRedRedRedRedRedRed',
        wts:true,
        tel:false,
        vib:true,
      },
    ]
    
    return {
      data: result,
      res: true,
      error: '',
    }
    
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

module.exports = ReservationController
