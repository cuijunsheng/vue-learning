/**
 * path是node模块里的内容，使用之前先对项目进行node的初始化，node init
 */
const path=require('path')

/**
 * 原先通过webpack打包，是在命令行里 webpack ./src/main.js ./dist/bundle.js
 * 现在把打包的入口和出口都放在了一个配置文件中，再打包的时候直接webpack就可以了
 */
module.exports={
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'), //__dirname是一个全局变量,注意是2个下划线
        filename:'bundle.js'
    }
}

/**
 * 以后使用webpack打包，大部分是通过 npm run build的方式
 *   1.在node的package.json文件中script-> build:"webpack",使用这种方式执行的是本地的webpack命令，而不是
 * 全局的.通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack：
 *   2.以后的项目分为开发时依赖和运行时依赖，开发时依赖webpack进行打包，运行的时候就不需要了，因为webpack已经
 * 打包好了浏览器可以识别的代码，就不需要依赖webpack了
 */