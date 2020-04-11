export default  {
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
}
