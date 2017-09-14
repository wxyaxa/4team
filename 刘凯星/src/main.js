import Vue from 'vue'
import index from './components/Index.vue'
import vuerouter from 'vue-router'

let router = new vuerouter({
    routes: [{
            name: 'index',
            path: '/',
            component: index
        }, {
            path: '/remen',
            component: {
                template: '<div>remen</div>'
            }
        }, {
            path: '/fenlei',
            component: {
                template: '<div><p><router-link to="yinyue" >音乐</router-link></p></div>'
            }

        },
        {
            path: '/yinyue',
            component: {
                template: '<div>详情页</div>'
            }
        },
        {
            // name:'index',
            path: '/shouye',
            component: index
        }, {
            path: '/qita',
            component: {
                template: '<div>其他</div>'
            }
        }
    ]


    // , {
    //

    // }, {
    //     path: '/jingpin',
    //     component: {
    //         template: '<div>jingpin</div>'
    //     }
})
Vue.use(vuerouter);
new Vue({
    el: '#app',
    router
})