import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
module.exports = function createApp(context) {
  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}

