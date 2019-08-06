let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']

class OrderController {
  // список всех менеджеров
  index (data) {
    // let id = data.id
    let obj = {}
    for(let list in lists) {
      obj[list] = {
        id: list,
        name : `${lists[list]} A.B.`,
        description: 'TableTableTable',
        phone: '79006551122',
        price:5000,
        type_pay:0,
        spot_min: 4,
        spot_max: 8,
        status: 0,
        room_id: 1,
        coord_id: 1,
      }
    }
    return obj
  }

// создание менеджера
  create (data) {
    let datas = {
      name : data.name,
      description: data.description,
      spot_min: data.spot_min,
      spot_max: data.spot_max,
      block: false,
      phone: data.phone,
      price: data.price,
      type_pay: data.type_pay,
      status: data.status,
      room_id: data.room_id,
      coord_id: data.coord_id,
    }
    return this.index()
  }
  // получение еденичного менеджера с историей логов
  item (data) {
    let name = lists[data.id]
    let obj= {
      id: data.id,
      name : `${name} A.B.`,
      description: 'orderorderorderorder',
      phone: '79006551122',
      price:5000,
      type_pay:0,
      spot_min: 4,
      spot_max: 8,
      status: 0,
      room_id: 1,
      coord_id: 1,
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

module.exports = OrderController
