
function add(num1,num2) {

    return num1+num2;
}

function mul(num1,num2) {

    return num1*num2;

}

//使用CommonJS模块化规范导出
module.exports={
    add,
    mul
}