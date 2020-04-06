/**
 * 小明知道他自己之前定义过一个flag=true,正常这块应该可以输出，但是，由于小红也定义了一个flag=false,
 * 覆盖了原来小明定义的flag,所以导致不能输出，（var定义的变量只有在函数中有作用域）
 */

;(function () {
    /**
     *  1。es5中使用模块化的思想
     *  导入moduleA,是一个全局变量可以直接用
     */

    //1.想用xiaoming1.js里的flag
    if(moduleA.flag){

        console.log('小明2');
    }

    //2.想用xiaoming1.js里的sum
    console.log(moduleA.sum(1, 2));

    /**
     * 2.commonJS的导入
     */
    //var obj = require("./xiaoming1")
    //var {flag,sum} = require("./xiaoming1")
})()
