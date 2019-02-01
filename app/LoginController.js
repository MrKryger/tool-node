


class LoginController {
  // constructor() {
  //   this.id = 'id_1';
  //   this.result = {};
  // }
  login () {
    return {
      data: {
        token: 'Red',
        start_page: 'home',
      },
      res: true,
      error: ''
    }
  }
  
  
  success () {
    return {
      data: {
        name: 'Red',
      },
      res: true,
      error: ''
    }
  }
  error () {
    return {
      data: {},
      res: false,
      error: 'errors'
    }
  }
}

module.exports = LoginController;
