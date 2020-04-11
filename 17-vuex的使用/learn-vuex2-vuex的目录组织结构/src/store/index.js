import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

//1.安装Vuex,这会调用vuex.install()
Vue.use(Vuex)

//2.使用vuex
const store = new Vuex.Store({
  state: {
    name: 'zs',
    counter: 100,
    students: [
      {id: 1, name: 'zs', age: 18},
      {id: 2, name: 'ls', age: 25},
      {id: 3, name: 'ww', age: 30},
      {id: 4, name: 'zl', age: 10}
    ],
    info: {
      id: 1, name: '小花', age: 18
    }
  },

  mutations,
  getters,
  actions,
  modules: {
    /**
     * 将state分模块,这里的a被默认放入了state中，使用a里内容组件需要$store.state.a.name
     */
    a: moduleA
  }

})

//3.导出vuex
export default store


/**
 * 对象的解构(es6语法)
 */
const obj = {
  id: 1,
  name: '小婷',
  age: 19,
  address: '北京'
}

//1.写法1
/*const id = obj.id
const name = obj.name*/
//2.写法2
const {id, name, address} = obj
console.log(id);
console.log(name);
console.log(address);
