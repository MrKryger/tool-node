let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']

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
        url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
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
        url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
      }]

    }
    let arr = [{
      id: 19,
      name : `Twoo Hall`,
      description: '',
      spot: 100,
      url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
    },{
      id: 20,
      name : `Twenty one Hall`,
      description: '',
      spot: 100,
      url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
    },
      {
        id: 21,
        name : `Twenty Hall`,
        description: '',
        spot: 100,
        url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
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
      url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
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
      url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg',
      line: 30,
      column: 30,
      map_id: 1
      // history: [{time:'12-07-2019', text:'Зарегестрирован столик №1'},
      //   {time:'13-07-2019', text:'Зарегестрирован столик №2'}
      // ],
    }

    return obj
  }


  maps (id) {
    let obj = {
      id: 1,

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

module.exports = HallController
