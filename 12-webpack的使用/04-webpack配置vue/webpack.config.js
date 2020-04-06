/**
 * path是node模块里的内容
 */
const path = require('path')

/**
 * Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 vue-loader
 * 应用到所有扩展名为 .vue 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：
 * @type {VueLoaderPlugin}
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/**
 * 原先通过webpack打包，是在命令行里 webpack ./src/main.js ./dist/bundle.js
 * 现在把打包的入口和出口都放在了一个配置文件中，再打包的时候直接webpack就可了
 */

/**
 * 以后使用webpack打包，大部分是通过 npm run build的方式
 *   1.在node的package.json文件中script-> build:"webpack",使用这种方式执行的是本地的webpack命令，而不是
 * 全局的.通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack：
 *   2.以后的项目分为开发时依赖和运行时依赖，开发时依赖webpack进行打包，运行的时候就不需要了，因为webpack已经
 * 打包好了浏览器可以识别的代码，就不需要依赖webpack了
 */
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname是一个全局变量,注意是2个下划线
        filename: 'bundle.js',
        //publicPath: 'dist' 也可以写在loader的options里面
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                /**
                 * 安装的时候 ：npm install --save-dev css-loader
                 * 使用css-loader只负责将css文件加载
                 * 使用style-loader负责将样式添加到dom中
                 * 使用多个loader顺序从右到左
                 */
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            /**
                             * limit: 8192  //默认大小8192，
                             * 当图片的大小小于limit时，会将图片编译成base64的字符串形式
                             * 当图片的大小大于limit时，需要使用file-loader模块加载
                             */
                            limit: 26000,
                            publicPath:'dist/',
                            /**
                             * .是连接符，[name]可以用原来的名字命名，[hash:8]使用hash算法保留8位
                             * .[ext]扩展名，用原来的扩展名  []内表示变量
                             */

                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                //对es6转化时，排除这个文件夹下的内容，只打包自己写的东西
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve:{
        alias:{
            /**
             * esm:es module的缩写，别名，使vue打包的时候指向node_modules下的下面这个文件
             */
            'vue$':'vue/dist/vue.esm.js'
        },
        /**
         * 此配置可以省略以下后缀
         */
        extensions:['.js','.vue']
    },
    plugins:[
        new VueLoaderPlugin(),
    ]
}

