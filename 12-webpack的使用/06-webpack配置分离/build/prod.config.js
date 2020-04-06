const baseConfig = require('./base.config')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})