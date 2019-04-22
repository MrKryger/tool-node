// const json = require('../json/all');

class AllController {
    constructor () {
        // this.id = 'id_1';
        // this.result = {};
    }
    index () {
        let  json = require('../json/all');
        return json
    }

    statusmap () {
        let  json = require('../json/statusmap');
       return json
    }


    filesystems () {
        let  json = require('../json/filesystems-get');
        return json
    }
    exp () {
        let  json = require('../json/exp');
        return json
    }

    list (id) {
        let json = require('../json/filesystems-list');
        return json
      }

    pools (id) {
      let json = require('../json/pools-list');
      return json[id]
    }


}



module.exports = AllController
