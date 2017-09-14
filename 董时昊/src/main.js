import Vue from "vue";
import index from "./components/index.vue"
import Router from "vue-router"
import remen from "./components/static/remen.vue"
import fenlei from "./components/static/fenlei.vue"
import jingpin from "./components/static/jingpin.vue"
import zhibo from "./components/static/zhibo.vue"
import guangbo from "./components/static/guangbo.vue"
import remenchild from "./components/static/remenchild.vue"

import  "../css/style.css";
import  "../css/common.css";
import  "../css/reset.css";
import  "../js/fontsize.js";

let router=new Router({
    routes:[
        {
            name:"index",
            path:"/index",
            component:index
        },
       {
            name:"remen",
            path:"/remen",
            component:remen,
            children:[
                {
                    name:'remenchild',
                    path:'remenchild',
                    component:remenchild
                },
                 {
                    name:'remenchild1',
                    path:'remenchild1',
                    component:{
                        template:'<p>这是热门的孩子</p>'
                    }
                }
            ]
        },{
            name:"fenlei",
            path:"/fenlei",
            component:{
                template:'<p>这是分类</p>'
            }
        },{
            name:"jingpin",
            path:"/jingpin",
            component:jingpin
        },{
            name:"zhibo",
            path:"/zhibo",
            component:zhibo
        },{
            name:"guangbo",
            path:"/guangbo",
            component:guangbo
        }
    ]
})

Vue.use(Router)


new Vue({
    el:"#app",
    router
})




