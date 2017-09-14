import Vue from "vue"
import Router from "vue-Router"
import index from "./components/yemian/index.vue"
//一级路由
import home from "./components/oneluyou/home.vue"
import me from "./components/oneluyou/me.vue"
import dirco from "./components/oneluyou/dirco.vue"
import login from "./components/oneluyou/login.vue"

//二级路由
import hot from "./components/twoluyou/hot.vue"
import fen from "./components/twoluyou/fen.vue"
import jing from "./components/twoluyou/jing.vue"
import zhi from "./components/twoluyou/zhi.vue"
import guang from "./components/twoluyou/guang.vue"

//三极路由
import music from "./components/threeluyou/music.vue"
import lishi from "./components/threeluyou/lishi.vue"
import gan from "./components/threeluyou/gan.vue"
import renwen from "./components/threeluyou/renwen.vue"

export default "./components/yemian" 
var router = new Router({
	//linkActiveClass:"active",
	routes:[
		{
			name:"home",
			path:'/home',
			component:home,
			children:[
				{
					name:"hot",
					path:'hot',
					component:hot,
					children:[
						{
							name:"music",
							path:'music',
							component:music
						},
						{
							name:"lishi",
							path:'lishi',
							component:lishi
						},
						{
							name:"gan",
							path:'gan',
							component:gan
						},
						{
							name:"renwen",
							path:'renwen',
							component:renwen
						}
					]
				},
				{
					name:"fen",
					path:'fen',
					component:fen
				},
				{
					name:"jing",
					path:'jing',
					component:jing
				},
				{
					name:"zhi",
					path:'zhi',
					component:zhi
				},
				{
					name:"guang",
					path:'guang',
					component:guang
				}
			]
		},
		{
			name:"me",
			path:'/me',
			component:me
		},
		{
			name:"dirco",
			path:'/dirco',
			component:dirco
		},
		{
			name:"login",
			path:'/login',
			component:login
		}
	]
})



Vue.use(Router)
new Vue({
	el:"#app",
	router,
	template:"<div class='box'><index></index></div>",
	components:{
		index:index
	}
})