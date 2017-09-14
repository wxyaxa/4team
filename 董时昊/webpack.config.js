var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: '[name].js',
        chunkFilename:"[name].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.png | .jpg$/,
                loader: "url-loader"
            },
            {
                test:/\.vue$/,
                include:/src/,
                loader:"vue-loader"
            }
        ]
    },
     resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    devServer: {
        host: "127.0.0.1",
        hot: true,
        port: 9900,
        contentBase:__dirname+'./src/static',
        watchContentBase:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename:"common"
        })
    ]
}