/**
 * 一。webpack配置plugin:
 *  1.如果不是webpack自带的，需要npm install对应的插件
 *  2.在webpack.config.js文件中，引入对应的plugin,如下
 *      const VueLoaderPlugin = require('vue-loader/lib/plugin')
 *  3.在配置文件中，module.exports = 下通过plugins属性配置，如下
 *      module.exports={
 *          ...,
 *          plugins:[
 *              new VueLoaderPlugin(),
 *          ]
 *      }
 *  4.plugin作用：对已有的框架进行一些功能扩展 ;webpack中的插件就是对webpack现在的功能的各种扩展，如
 *打包优化，文件压缩等等
 *  5.常用的plugin
 *   1)BannerPlugin: webpack自带的插件，为打包的文件添加版权声明
 *   2)HtmlWebpackPlugin: 将index.html打包到dist文件夹中，可以指定模板，同时会将打包的js文件自动通过
 *      script标签插入到body中
 *   3)uglifyjs-webpack-plugin:丑化js的插件，打包的时候可以将js文件压缩，会去掉注释
 *
 *
 * 二。webpack-dev-server搭建本地服务器，每次修改文件后，会临时在内存中生成一份打包好的内容，此时并没有保存
 * 到硬盘，只有执行了webpack打包后才保存到磁盘
 *  1.npm install webpack-dev-server
 *  2.在webpack.config.js中配置devServer
 *      devServer:{
 *          contentBase:'./dist/  对哪个文件夹生效
 *          inline:true     页面是否实时刷新
 *      }
 *  3.在package.json配置一个npm script,本地执行webpack命令
 *      如：script:{
 *          "dev"："webpack-dev-server --open"  --open参数，可以在运行脚本后自动打开页面
 *      }
 *
 *
 * 三。webpack配置文件的分离：dev和prod,
 *  需要安装一个插件，模块 npm install webpack-merge
 *
 */