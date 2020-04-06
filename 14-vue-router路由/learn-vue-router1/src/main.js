import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/**
 * Vue类的原型里加内容
 */
Vue.prototype.test=function () {
  console.log('test');
}
Vue.prototype.name='cjs'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);
