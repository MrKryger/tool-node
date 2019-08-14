let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']

class SpotController {
  // список всех менеджеров
  index (data) {
    // let id = data.id
    let obj = {}
    let count_id = 0
    for (let list = 0; list < 7; list++) {
      let arr = []
      for (let j = 0; j < 30; j++) {
        count_id++
        arr.push({
          id: count_id,
          name: 100 + j,
          description: 'TableTableTable',
          spot_min: 4,
          spot_max: 8,
          room_id: list, //*
          hall_id: list,
          block: false,
        })
        obj[list] = arr
      }
    }
    return obj
  }
  indexParentRoom (data) {
    let id = data.id
    let obj = {}
    let count_id = 0
    for (let list = 0; list < 7; list++) {
      let arr = []
      for (let j = 0; j < 30; j++) {
        count_id++
        arr.push({
          id: count_id,
          name: 100 + j,
          description: 'TableTableTable',
          spot_min: 4,
          spot_max: 8,
          room_id: list, //*
          hall_id: list,
          block: false,
        })
        obj[id] = arr
      }
    }
    return obj[id]
  }
  indexParentId (data) {
    // let id = data.id
    let obj = {}
    let count_id = 0
    for (let list = 0; list < 7; list++) {
      let arr = []
      for (let j = 0; j < 30; j++) {
        count_id++
        obj[count_id] = {
          id: count_id,
          name: 100 + j,
          description: 'TableTableTable',
          spot_min: 4,
          spot_max: 8,
          room_id: list, //*
          hall_id: list,
          block: false,
        }
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
      room_id: data.room_id,
      hall_id: data.hall_id,
      block: false,
    }
    return this.index()
  }
  // получение еденичного   с историей логов
  item (data) {
    let name = lists[data.id]
    let obj= {
      id: data.id,
      name : 100 + data.id,
      description: 'TableTableTable',
      spot_min: 4,
      spot_max: 8,
      room_id: 0,
      hall_id: 0,
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
