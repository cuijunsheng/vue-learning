

/**
 * es6使用模块化导入导出：
 * 1.现在html中引入js时，type=module
 * 2.导出：export
 * 3.导入：import
 */

//1.导入 以对象形式导出的模块
import {name,age,sum} from "./xm_1.js";

console.log(name);
console.log(age);
console.log(sum(1,2));

//2.导入 定义变量时直接导出的模块
import {flag} from "./xm_1.js";

console.log(flag);

//3.导入 导出是函数和类的模块
import {mul,Person} from "./xm_1.js";

console.log(mul(2,3));

let person = new Person('zs',18);
console.log(person);
person.run()

//4.导入 导出是export default的内容，可以自己命名，而不必使用导出时的固定名字
import addr from './xm_1.js'

console.log(addr);


//5.导入 统一全部导入 注意，导入的时候，需要加.js
import * as moduleA from './xm_1.js'

console.log(moduleA.flag);
console.log(moduleA.sum(1, 2));