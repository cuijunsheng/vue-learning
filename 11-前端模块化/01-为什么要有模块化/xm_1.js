var moduleA = (function () {
    console.log('小明');

    var flag = true;
    if (flag) {
        console.log("1111111111")
    }

    function sum(n1, n2) {

        return n1 + n2;
    }

    /**
     * 闭包匿名函数可以解决全局变量的命名冲突问题，但是不能解决复用问题
     * 这个时候需要使用模块化的思想解决：CommonJS,es6的Modules,AMD,CMD
     *
     */

    //1.es5里的模块化使用
    var obj = {
            flag: flag,
            sum: sum
        }

    return obj;

    //2.CommonJS的导出,因为需要一些依赖支持，所以此处并不可用
   /* module.exports={
        flag:flag
        sum:sum
    }*/
})()

