export default {
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
}
