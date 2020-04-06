const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')
//合并base.config和dev.config
module.exports = webpackMerge(baseConfig,{
    devServer: {
        contentBase: './dist',
        online: true
    }
})