let ManagerController = require('../app/ManagerController')
let RoomController = require('../app/RoomController')


class AllController {
  constructor (data) {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (data) {
    console.log(data,'index')
    switch (data.method) {
      case 'info':
        return this.info()
      case 'item':
        return this.item(data.params)
      case 'upload':
        return this.upload(data.params)
      case 'rooms-list':
        return this.rooms()
      case 'managers-list':
        return ManagerController.prototype.index()
      case 'manager':
        return ManagerController.prototype.item(data.params)
      case 'managers-access':
        return ManagerController.prototype.itemAccess(data.params)
      case 'managers-add':
        return ManagerController.prototype.itemAccessAdd(data.params)
      case 'manager-create':
        return ManagerController.prototype.create(data.params)
      case 'manager-update':
        return ManagerController.prototype.update(data.params)
      case 'manager-remove':
        return ManagerController.prototype.remove(data.params)
      case 'image':
        return this.image()
      default:
        return this.default()
    }
  }

  info () {
    let json = require('../json/settings')
    return json
  }

  item (data) {
    return data
  }
  upload (data) {
    console.log(data.params, 'upload')
    return data
  }

  image () {
    console.log('image')
    let a = {url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg'}
    return a
  }
  rooms () {
    let lists = ['Yellow','Green','Blue','Brown','White','Red','Orange','Pink']
    let obj = {}
    for(let list in lists) {
      obj[list] = {
        id: list,
        name : `${lists[list]} Rooms`,
        address: `${lists[list]} Street`,
        description: '',
        img: '',
        id_map: ''
      }
    }

    return obj
  }


  default () {

    return 'default'
  }
}

module.exports = AllController
