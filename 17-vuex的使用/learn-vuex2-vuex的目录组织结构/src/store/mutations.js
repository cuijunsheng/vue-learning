import {INCREMENT} from "./mutations-types";

export default  {
  /** 突变，异变，改变,组件修改state应该通过commit到mutations里修改
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
}
