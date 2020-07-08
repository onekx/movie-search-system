module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://movie.douban.com/j",
                secure: false,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
}