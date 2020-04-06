import Vue from 'vue'
import App from './App'

console.log(App);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


/**
 * runtime-only中，直接是：render函数->virtual dom ->真实的dom
 */
