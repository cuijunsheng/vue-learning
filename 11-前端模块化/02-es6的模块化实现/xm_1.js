let name = '张三'
let age = 18

function sum(n1, n2) {

    return n1 + n2
}


/**
 * es6使用模块化导入导出：
 * 1.现在html中引入js时，type=module
 * 2.导出：export
 * 3.导入：import
 */

//1.export一个对象
export {
    name,
    age,
    sum
}

//2.定义变量的时候直接导出
export let flag = true

//3.导出函数和类
export function mul(n1, n2) {
    return n1 * n2
}

export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    run() {
        console.log('在奔跑');
    }
}


//4.export default  一个模块只能有一个，可以让导入者自己命名，而不是固定的名字
let address = '北京市'
export default address

