


class IndexController {
  // constructor() {
  //   this.id = 'id_1';
  //   this.result = {};
  // }
  
  success () {
    return {
      data: {},
      res: true,
      error: ''
    }
  }
  error () {
    return {
      data: {},
      res: false,
      error: 'error'
    }
  }
}

module.exports = IndexController;
