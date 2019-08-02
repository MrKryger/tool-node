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

      case 'rooms-list':
        return RoomController.prototype.index()
      case 'room':
        return RoomController.prototype.item(data.params)
      case 'room-create':
        return RoomController.prototype.create(data.params)
      case 'room-update':
        return RoomController.prototype.update(data.params)
      case 'room-remove':
        return RoomController.prototype.remove(data.params)

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



  image () {
    console.log('image')
    let a = {url: 'http://localhost:3000/uploads/fa271655b8c8e1b2142c8307aa84cadf.jpg'}
    return a
  }


  default () {

    return 'default'
  }
}

module.exports = AllController
