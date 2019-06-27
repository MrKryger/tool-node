<template>
    <div class="home"
         style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 150px">
        <pre>
            {{items}}
        </pre>
        <br>
        <button class="" @click="getData()">Click</button>
        <br>
        <button class="" @click="getDataRpc()">Click Rpc</button>
        <input v-model="rpc">
    </div>
</template>

<script>
  import http from '../services/http'

  export default {
    name: 'home',
    data () {
      return {
        items: [],
        rpc: 'info'
      }
    },
    methods: {
      getData () {
        let body = {
          id: 1
        }
        http().post('/rest/index', body).then((res) => {
          this.items = res.data
        })
      },
      getDataRpc () {
        let body = {
          method: this.rpc,
          params: {
            id: 1
          }
        }
        http().post('/rpc', body).then((res) => {
          this.items = res.data
        })
      }
    }
  }
</script>
