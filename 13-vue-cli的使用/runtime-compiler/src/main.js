// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
 * 此时的App中包含的template已经被编译成了render函数
 */
console.log(App);

const Cpn={
  template:'<div>{{msg}}</div>',
  data(){
    return {
      msg:'我是cpn组件'
    }
  }
}
new Vue({
  el: '#app',
  /*components: {App},
  template: '<App/>'*/
  render: function (createElement) {
    //1.createElement普通用法：arg1:元素名，arg2:{元素属性}，arg3:[元素内容]
    //return createElement('h2', {class:'box'}, ['我是h2'])

    //2.第三个参数中再次调用createElement函数
    /*return createElement('div', {class: 'box'}, [createElement('h2', ['我是h2']),
      createElement('button', ['按钮'])
    ])*/

    //3.传入一个组件对象
    return createElement(Cpn)
  }
})

/**
 * 使用vue cli构建项目时，2个选项的区别，运行时
 * 1.runtime-compiler中，template编译过程：
 *  template->ast(abstract syntax tree)->render函数->virtual dom ->真实的dom
 *      如果你需要在客户端(浏览器)编译模板 (比如传入一个字符串给 template 选项，
 *  或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版：
 *  new Vue({
 *    el: '#app',
 *    components: { App },
 *    template: '<App/>'
 *  })
 *
 *
 */

/**
 * 2.runtime-only中，直接是：render函数->virtual dom ->真实的dom
 *  new Vue({
 *     el: '#app',
 *    render: h => h(App)
 *   })
 *
 *  1）在传入render函数后依然有template的内容，这个时候构建运行时可以解析的原因：
 *    因为webpack中的vue-loader，和vue-template-compiler在打包构建的时候会将template内容
 * 预编译成浏览器能解析的js代码，最终打包好的可以在浏览器直接运行，
 *
 *  2) 由于vue-template-compiler是开发时依赖，生产是不会打包的，只会将打包之前的template内容预编译成js代码，
 * 而如果在main.js中new Vue()使用了template，即需要在客户端（浏览器）编译模板，也就是在运行时需要编译，
 * 但是运行时又没有vue-template-compiler，所以需要运行时+编译器（runtime+compiler）
 */
