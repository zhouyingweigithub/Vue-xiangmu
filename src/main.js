import Vue from 'vue'
import App from './App.vue'
// // 响应式布局
import rem from './rem.js'
// 引入路由对象
import router from './router.js'
// 引入weui
import 'weui'




Vue.config.productionTip = false

new Vue({
  rem,
  router,
  render: h => h(App),
}).$mount('#app')
