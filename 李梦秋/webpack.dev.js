var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry:__dirname + "/src/main.js",
	output:{
		path:__dirname +"/dist",
		filename:"[name].js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.css$/,
				use:["style-loader","css-loader"]
			},
			{
				test:/\.html$/,
				loader:"html-loader"
			},
			{
				test:/\.jpg|.png$/,
				loader:"url-loader"
			},
			{
				test:/\.vue$/,
				loader:"vue-loader"
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template:"./index.html"
		})
	],
	devServer:{
		port:8008,
		hot:true,
		host:"localhost"
	},
	resolve:{
		alias:{
			"vue":"vue/dist/vue.js"
		}
	}
}