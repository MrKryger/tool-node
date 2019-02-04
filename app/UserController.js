const settings = require("../json/settings");

class UserController {
  constructor() {
    // this.id = 'id_1';
    // this.result = {};
  }
  
    index () {
      let data = [
        {
          first_name: "Red",
          last_name: "",
          middle_name: "",
          age: "",
          birthday: "",
          email: "",
          phone: "",
          rating: "",
          notes: "",
        },
        {
          first_name: "Black",
          last_name: "",
          middle_name: "",
          age: "",
          birthday: "",
          email: "",
          phone: "",
          rating: "",
          notes: "",
        }
      ]
      return {
        data,
        res: true,
        error: ''
      }
    }
  
  profile () {
    let data = {
      calendar_view: "",
      email: "red@mail.ru",
      first_name: "Red",
      last_name: "Reds",
      phone: "7911",
      start_page: "home",
    }
    return {
      data,
      res: true,
      error: ''
    }
  }
}

module.exports = UserController;
