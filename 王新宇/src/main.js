// import Vue from 'vue/dist/vue.js'
import Vue from 'vue'
import Router from 'vue-router'
import index from './components/Index.vue'
import home from './components/home.vue'
import me from './components/me.vue'
import find from './components/find.vue'
import login from './components/login.vue'
import fen from './components/fen.vue'
import hot from './components/hot.vue'
import bord from './components/bord.vue'
import guang from './components/guang.vue'
import jing from './components/jing.vue'
import style from '../css/style.css'
import reset from '../css/reset.css'
import common from '../css/common.css'
import font from '../fonts/demo.css'
let router=new Router({
    linkActiveClass:'active',
    routes:[
        {
            name:'home',
            path:'/home',
            component:home,
            children:[
                {
                    name:'hot',
                    path:'hot',
                    component:{
                        template:'<p>这是热门</p>'
                    }
                },
                {
                    name:'fen',
                    path:'fen',
                    component:fen
                },
                {
                    name:'bord',
                    path:'bord',
                    component:{
                        template:'<p>这是直播页</p>'
                    }
                },
                {
                    name:'guang',
                    path:'guang',
                    component:{
                        template:'<p>这是广播</p>'
                    }
                },
                {
                    name:'jing',
                    path:'jing',
                    component:{
                        template:'<p>这是精品也</p>'
                    }
                }
            ]
        },
        {
            name:'me',
            path:'/me',
            component:me
        },
        {
            name:'find',
            path:'/find',
            component:find
        },
        {
            name:'login',
            path:'/login',
            component:login
        }
    ]
})
Vue.use(Router)
new Vue({
    el:'#app',
    router
})
