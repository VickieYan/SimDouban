// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios'
import VueAxious from '../node_modules/vue-axios'
Vue.use(VueAxious,axios);


Vue.config.productionTip = false

// axios.get('/api.douban.com/v2/movie/search?q=aaa').then(function(res){
// 	console.log(res.data)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
