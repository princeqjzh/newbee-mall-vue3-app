module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/browser': {
                target: 'http://' + 'localhost' + ':12800',//这里是路由和报错报告的代理
                changeOrigin: true
            },
            '/v3': {
                target: 'http://' + 'localhost' + ':12800',
                changeOrigin: true//这里是追踪报告的代理
            }
        }
    }
}