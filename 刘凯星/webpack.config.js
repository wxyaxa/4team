var webpack=require('webpack'),
    HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:__dirname+'/src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'[name].js',
        chunkFilename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jpg | png$/,
                loader:'url-loader'
            }
        ]
    },
    devServer:{
        port:8800,
        host:'localhost',
        hot:true,
        contentBase:__dirname+'/src/static',
        watchContentBase:true
    },
    resolve:{
        'alias':{
            'vue':'vue/dist/vue.js'
        }
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'common'
        })
    ]
}