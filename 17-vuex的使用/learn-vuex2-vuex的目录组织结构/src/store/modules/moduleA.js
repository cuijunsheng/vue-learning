export default {
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
      },1000)
    }
  }
}
