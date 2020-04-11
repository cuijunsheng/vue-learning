import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

//1.安装Vuex,这会调用vuex.install()
Vue.use(Vuex)

//2.使用vuex
const moduleA = {
  state: {
    /**
     * 模块里的state内容，组件中使用的时候为$store.state.a.name, 即vuex会自动将模块添加到根中
     */
    name: 'zhangsan'
  },
  getters: {
    /**
     *    1.模块里的getters，组件调用的时候与正常的一样：$state.getters.fullName,这样，vuex会先去父store中
     * getters里找对应的内容，找不到就会去modules里的getters找
     *    2.modules里getters内容还可以有第三个参数，rootState
     */
    fullName(state) {
      return state.name + "-111";
    },
    fullName2(state, getters) {
      return getters.fullName + "-222"
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + "-" + rootState.counter;
    }
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    /**
     *  模块里actions的context上下文对象只争对模块中的内容，不包括根里的,即这里的context.commit()只会提交给
     * modules里的mutations中，执行里面的方法
     * @param context
     */
    aysncUpdateName(context, payload) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', payload)
      })
    }
  }
}

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
  //突变，异变，改变,组件修改state应该通过commit到mutations里修改
  mutations: {
    /**
     *    尽量不要在mutations里出现异步方法，因为异步后，devtools是跟踪不到state的变化的，
     * 如果必须异步方法的话，那么事件类型应该定义在Actions里
     */
    /*increment(state) {
      state.counter++
    },*/
    //这里通过常量和另一种函数定义形式
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    /**
     * mutations：修改时state时携带参数，payload
     * 这里定义的方法称为事件类型，对应往过传的{}里的type
     */
    /*addCount(state,count){
      console.log(count);
      state.counter+=count;
    },*/
    //以对象风格提交的时候，第二个参数就成了一个对象，用payload命名更合适
    addCount(state, payload) {
      console.log(payload);
      state.counter += payload.count;
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    /**
     * vuex中的store状态是响应式的，这就需要遵循一些规则
     *  1.提前在store中初始化好需要的属性
     *  2.当需要修改对象的属性时，使用下面方式
     *    Vue.set(obj,'address','北京')
     *    Vue.delete(obj,'age')
     *    或者用新对象给旧对象赋值
     */
    updateInfo(state) {
      //1.直接修改对象已存在的属性，是响应式的
      //同步方法devtools可以跟踪到，异步的就跟踪不到了
      state.info.name = "小美"
      /*setTimeout(()=>{
        state.info.name='小枫'
      },1000)*/

      //2.通过类似数组下标的方式给对象添加属性，不是响应式的
      // state.info['address']='北京'

      //3.通过vue提供的Vue.set(obj,'属性','值')的方式是响应式的，如果是数组，第二个参数则是number即数组下标
      //Vue.set(state.info,'address','北京')

      //4.通过js的delete 删除对象属性不是响应式的
      //delete state.info.age

      //5.通过Vue的delete()删除对象属性是响应式的
      //Vue.delete(state.info,'age')
    }
  },
  getters: {
    //vuex的getters相当于组件的计算属性，定义对应的getters，参数默认就是state状态
    powerCounter(state) {
      return state.counter * state.counter;
    },

    more20Stu(state) {
      return state.students.filter(s => s.age > 20)
    },

    more20StuLength(state, getters) {
      return getters.more20Stu.length
    },

    moreAgeStu(state) {

      /*return function (age) {
        return state.students.filter(s=>s.age>age)
      }*/

      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  actions: {
    /**
     *    一旦有异步操作(异步修改state),都需要在actions中操作，这样devtools才能追踪到，
     * 但是不管怎样，修改state都是要经过mutations的
     *
     * 这里定义的异步方法，都有一个参数context:上下文 对象，就相当于store
     */
    /*asyncUpdateInfo(context,payload){
      setTimeout(()=>{
        context.commit('updateInfo') //store.commit()提交到mutations中执行修改
        payload.success();
      },1000)
    }*/

    asyncUpdateInfo(context, message) {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo') //store.commit()提交到mutations中执行修改
          console.log(message);
          resolve("再传给你点东西")
        }, 1000)

      })

    }
  },
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
const {id,name,address} = obj
console.log(id);
console.log(name);
console.log(address);
