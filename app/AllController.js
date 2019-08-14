let ManagerController = require('../app/ManagerController')
let RoomController = require('../app/RoomController')
let HallController = require('../app/HallController')
let SpotController = require('../app/SpotController')
let OrderController = require('../app/OrderController')


class AllController {
  constructor (data) {
    // this.id = 'id_1';
    // this.result = {};
  }

  index (data) {
    console.log(data,'index')
    switch (data.method) {

      case 'nav-list':
        return RoomController.prototype.nav()

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


      case 'spots-list':
        return SpotController.prototype.index()
      case 'spots-list-room':
        return SpotController.prototype.indexParentRoom(data.params)
      case 'spots-list-id':
        return SpotController.prototype.indexParentId()
      case 'spot':
        return SpotController.prototype.item(data.params)
      case 'spot-create':
        return SpotController.prototype.create(data.params)
      case 'spot-update':
        return SpotController.prototype.update(data.params)
      case 'spot-remove':
        return SpotController.prototype.remove(data.params)

      case 'orders-list':
        return OrderController.prototype.index()
      case 'order':
        return OrderController.prototype.item(data.params)
      case 'order-create':
        return OrderController.prototype.create(data.params)
      case 'order-update':
        return OrderController.prototype.update(data.params)
      case 'order-remove':
        return OrderController.prototype.remove(data.params)

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

      case 'hall-list':
        return HallController.prototype.index()
      case 'hall':
        return HallController.prototype.item(data.params)
      case 'hall-access':
        return HallController.prototype.itemAccess(data.params)
      case 'hall-add':
        return HallController.prototype.itemAccessAdd(data.params)
      case 'hall-create':
        return HallController.prototype.create(data.params)
      case 'hall-update':
        return HallController.prototype.update(data.params)
      case 'hall-remove':
        return HallController.prototype.remove(data.params)
      case 'hall-map-set':
        return HallController.prototype.mapSet(data.params)
      case 'hall-map-get':
        return HallController.prototype.mapGet(data.params)
      case 'image':
        return this.image()
      default:
        return this.default()
    }
  }



  image () {
    console.log('image')
    let a = {url: 'http://localhost:3000/uploads/46b31fc0b515c7891c6fab3e6de9d78c'}

    return a
  }


  default () {

    return 'default'
  }
}

module.exports = AllController
