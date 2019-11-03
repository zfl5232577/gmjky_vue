module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.gmjk.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
