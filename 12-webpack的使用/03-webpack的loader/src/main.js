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



