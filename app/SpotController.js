let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']

class SpotController {
  // список всех менеджеров
  index (data) {
    // let id = data.id
    let obj = {}
    for(let list = 0; list < 50; list++) {
      obj[list] = {
        id: list,
        name : 100 + list,
        description: 'TableTableTable',
        spot_min: 4,
        spot_max: 8,
        block: false,
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
    }
    return this.index()
  }
  // получение еденичного менеджера с историей логов
  item (data) {
    let name = lists[data.id]
    let obj= {
      id: data.id,
      name : 100 + data.id,
      description: 'TableTableTable',
      spot_min: 4,
      spot_max: 8,
      block: false,
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

module.exports = SpotController
