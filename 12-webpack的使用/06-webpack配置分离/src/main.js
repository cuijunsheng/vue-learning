/**
 * 1.使用CommonJS模块化规范导入
 */
const mathUtils = require('./js/mathUtils')

console.log(mathUtils.add(20, 30));
console.log(mathUtils.mul(20, 30));


/**
 * 2.使用es6的模块化规范导入
 */
import {person} from './js/info'

console.log(person);
console.log(person.id);
console.log(person.name);
console.log(person.age);


/**
 * 3.将css也作为一个模块导入
 */
require('./css/normal.css')
//import css from './css/normal.css'

/**
 * 4.将less作为一个模块导入
 */
require('./css/special.less')


/**
 *    5.将vue也作为一个模块导入,npm安装vue的时候，使用--save，因为并不仅仅只是开发中使用vue,
 * 在运行，上线过程都是要用vue的
 *  vue代码在使用webpack打包的时候会有2种环境:（默认使用runtime-only）
 *      runtime-only:代码中不可以有任何的template,比如vue的app
 *      runtime-compiler:代码中可以有template
 *   所以需要在webpack.package.js文件中配置相关内容，指向runtime-compiler
 */
import Vue from 'vue'
// import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    /**
     * 一个vue实例中即存在el和template,template里的内容会替换el里的写到div中
     * template下内容还得继续抽取
     */
    /*template:`
        <div>
            <h2>我是vue实例</h2>
            <h2>{{msg}}</h2>
            <button>按钮</button>
        </div>
    `,*/
    template:'<App/>',
    data:{
    },
    components:{
        App
    }
})

