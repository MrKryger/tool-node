let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']
let bcrypt = require('bcrypt');
class ManagerController {
  // список всех менеджеров
  index () {
    let obj = {}
    for(let list in lists) {
      obj[list] = {
        id: list,
        name : `${lists[list]} manager`,
        description: `managermanagermanagermanagermanager`,
        phone: '79222222222',
        block: false,
      }
    }
    return obj
  }
  // список менеджеров имеющих доступ
  itemAccess (data) {
    // let id = data.id
    return ['2','3','4']
  }
  // добавление допуска и возврат списка itemAccess
  itemAccessAdd (data) {
    let id = data.id
    let arr = this.itemAccess()
    arr.push(data.id)

    return arr
  }
// создание менеджера
  create (data) {
    let salt = bcrypt.genSaltSync(10);
    let passwordToSave = bcrypt.hashSync(data.pass, salt)

    let datas = {
      name : data.name,
      description: data.description,
      phone: data.phone,
      pass: passwordToSave,
      block: false,
    }
    return this.index()
  }
  // получение еденичного менеджера с историей логов
  item (data) {
    let name = lists[data.id]
    let obj= {
      id: name,
      name : `${name} manager`,
      description: 'managermanagermanagermanagermanager',
      phone: '79111111111',
      block: false,
      history: [{time:'12-07-2019', text:'Зарегестрирован столик №1'},
        {time:'13-07-2019', text:'Зарегестрирован столик №2'}
      ],
    }

    return obj
  }
  // изменение данных
  update (data) {
    // let id = data.id
    return this.index()
  }
  // удаление менеджера
  remove (data) {
    // console.log(data)
    let id = data.id
    return this.index()
  }
}

module.exports = ManagerController
