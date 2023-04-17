// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        allowedHosts: 'all'
    }
}