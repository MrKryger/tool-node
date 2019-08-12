let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']
var fs = require('fs');
let OrderController = require('../app/OrderController')


class HallController {
  // список всех заведений
  index () {
    let obj = {}
    for(let list in lists) {
      obj[list] = {
        id: list,
        name : `${lists[list]} Halls`,
        description: '',
        spot: 100,
        // url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
        url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',

      }
    }
    return obj
  }

   indexParentId () {
    let obj = {}
    for(let list in lists) {
      obj[list] = [{
        id: list,
        name : `${lists[list]} Halls`,
        description: '',
        spot: 100,
        // url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
        url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',

      }]

    }
    let arr = [{
      id: 19,
      name : `Twoo Hall`,
      description: '',
      spot: 100,
      url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',

    },{
      id: 20,
      name : `Twenty one Hall`,
      description: '',
      spot: 100,
      url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',
    },
      {
        id: 21,
        name : `Twenty Hall`,
        description: '',
        spot: 100,
        url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',
      }]
    obj[1] = arr
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
// создание заведения
  create (data) {
    let datas = {
      name : data.name,
      description: data.description,
      spot: data.spot,
      url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',
      line: data.line,
      column: data.column,

    }
    return this.index()
  }
  // получение еденичного заведения с историей логов
  item (data) {
    let name = lists[data.id]
    let obj= {
      id: name,
      name : `${name} Hall`,
      description: 'HallHallHallHall',
      spot: 100,
      // url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
      url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c',
      line: 30,
      column: 30,
      map_id: 1,
      orders: OrderController.prototype.indexParentId(),
      maps: this.mapGet(),
      // history: [{time:'12-07-2019', text:'Зарегестрирован столик №1'},
      //   {time:'13-07-2019', text:'Зарегестрирован столик №2'}
      // ],
    }

    return obj
  }


  mapSet (val) {
    console.log('maps')
    let data = JSON.stringify(val);
    fs.writeFileSync('maps.json', data);

    return {result: true}
  }
  mapGet (val) {
    let a = require('../maps')
    return a
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

module.exports = HallController
