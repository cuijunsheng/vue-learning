import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})

/**
 * 数组的解构(不常用)
 */
const names = ['zs', 'ls', 'ww']
// const name1=names[1]

const [name1, name2, name3] = names

/**
 * 1.axios的基本使用
 */
/*axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'get'
}).then(res => {
    console.log(res);
})


axios({
    url: 'http://123.207.32.32:8000/home/data',
    method: 'get',
    //专门争对get请求的参数拼接
    params: {
        type: 'pop',
        page: 1
    }
}).then(res => {
    console.log(res);
})*/


/**
 * 2.axios发送并发请求，带多个请求返回后，再进行统一处理 axios[]
 */
// axios.all([axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//         type: 'sell',
//         page: 3
//     }
// })]).then(results => {
//     console.log(results);
// })

//将all的结果展开
/*axios.all([axios({
    url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
    url: 'http://123.207.32.32:8000/home/data',
    params: {
        type: 'sell',
        page: 3
    }
})]).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
}))*/

/**
 * 3.axios配置相关
 */
/*axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
axios.all([axios({
    url: 'home/multidata'
}), axios({
    url: 'home/data',
    params: {
        type: 'sell',
        page: 3
    }
})]).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
}))*/


/**
 * 4.创建axios的实例
 */
/*
const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
})

instance1({
    url:'/home/multidata'
}).then(res=>{
    console.log(res);
})*/


/**
 * 5.将axios创建实例封装后使用
 */
import {request} from './network/request'
/*
request({
    url:'/home/multidata',
    method:'post'
},res=>{
    console.log(res);
},err=>{
    console.log(err);
})*/

request({
    url: '/home/multidata',
    method: 'get'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})