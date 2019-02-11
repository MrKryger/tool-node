const settings = require('../json/settings')
const db = require('../db')

class UserController {
  constructor () {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (callback) {
    let data = {}

    // db.connect()
    // db.query('SELECT * FROM node.users', function (err, results, fields) {
    //   // if (err) {
    //   //   console.log(err);
    //   // } else {
    //     console.log(results);
    //       // var user = results[0];
    //       // return{
    //       //   name: user.name,
    //       //   email: user.name,
    //       // };
    //   // }
    //   callback(null, results);
    //
    // })
  
    return {
      data: result,
      res: true,
      error: ''
    }
    // console.log('as')
    // console.log(data)
    // return {
    //   data,
    //   res: true,
    //   error: ''
    // }
  }



  profile () {
    let data = {
      calendar_view: '',
      email: 'red@mail.ru',
      first_name: 'Red',
      last_name: 'Reds',
      phone: '7911',
      start_page: 'home',
    }
    return {
      data,
      res: true,
      error: ''
    }
  }
}

module.exports = UserController
