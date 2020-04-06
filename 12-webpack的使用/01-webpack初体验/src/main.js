
//1.使用CommonJS模块化规范导入
const mathUtils = require('./mathUtils')

console.log(mathUtils.add(20, 30));
console.log(mathUtils.mul(20, 30));


//2.使用es6的模块化规范导入
import {person} from './info'

console.log(person);
console.log(person.id);
console.log(person.name);
console.log(person.age);