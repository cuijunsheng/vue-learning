import axios from 'axios'

/**
 * 1.方式1：让调用方传两个函数参数进来，然后回调给调用方
 */

/*export function request(config,success,failure) {
  //1.创建axios实例
  const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2.axios拦截器

  //3.发送真正的网络请求
  instance1(config).then(res=>{
    success(res)
  }).catch(err=>{
    failure(err)
  })
}*/

/**
 * 2.方式2：返回一个promise
 */

/*export function request(config) {

  return new Promise((resolve, reject) => {
    //1.创建axios实例
    const instance1 = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    //2.axios拦截器

    //3.发送真正的网络请求
    instance1(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })

  })
}*/

/**
 * 3.方式3：直接返回，因为他本身就是一个promise对象
 */
export function request(config) {

  /**
   * 1.创建axios实例
   */
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  /**
   * 2.axios的拦截器，分为请求拦截和响应拦截，同时可以直接全局axios拦截，但大多是是实例拦截
   */
  //2.1 请求拦截
  instance1.interceptors.request.use(config => {
    /**
     *    请求拦截第一个参数拦截的就是config对象，可以对config内容进行一些设置，再发送请求，
     * 但是最后一定要返回，在第三步发送真正的网络请求是才能拿到config，否则没有,相应拦截也需要返回
     */
    //console.log(config);
    //1.比如，config中一些信息不符合服务器的要求
    //2.比如，每次发送网络请求时希望在界面显示一个正在请求的图标
    //3.比如，某些网络请求必须携带一些信息(比如token)
    return config

  }, err => {

  })

  //2.2 响应拦截
  instance1.interceptors.response.use(res => {
    //  响应成功这里拦截的一个大对象，里面包括一些axios添加进去的内容，其实我们可能只需要data数据，所以可以
    //在这里拦截后，只把data数据返回回去
    //console.log(res);
    return res.data;
  }, err => {
    console.log(err);
  })
  /**
   * 3.发送真正的网络请求
   */

  return instance1(config)

}
