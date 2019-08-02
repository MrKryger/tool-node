let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']

class RoomController {
  // список всех заведений
  index () {
    let obj = {}
    for(let list in lists) {
      obj[list] = {
        id: list,
        name : `${lists[list]} Rooms`,
        address: `${lists[list]} Street`,
        description: '',
        img: '',
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
// создание заведения
  create (data) {
    let datas = {
      name : data.name,
      description: data.description,
      address: data.phone,
      img: '',
      block: false,
    }
    return this.index()
  }
  // получение еденичного заведения с историей логов
  item (data) {
    let name = lists[data.id]
    let obj= {
      id: name,
      name : `${name} manager`,
      description: 'managermanagermanagermanagermanager',
      img: '',
      address: 'address',
      block: false,
      // history: [{time:'12-07-2019', text:'Зарегестрирован столик №1'},
      //   {time:'13-07-2019', text:'Зарегестрирован столик №2'}
      // ],
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

module.exports = RoomController
