var webpack = require('webpack')
module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css/,
                loader: 'css!style?module!postcss'//添加对样式表的处理
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer'),
                ],
                devServer: {
                    contentBase: "./public",
                    colors: true,
                    historyApiFallback: true,
                    inline: true,
                    hot: true
                }
            }
        }),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//在这个数组中new一个就可以了
        new webpack.HotModuleReplacementPlugin()
    ]
}