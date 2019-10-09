import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
import {createStore} from './store/store'
import { sync } from 'vuex-router-sync'
Vue.config.productionTip = false
Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})
module.exports = function createApp(context) {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })
  return { app, router, store }
}

