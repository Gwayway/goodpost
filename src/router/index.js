import Router from 'vue-router';
import Vue from 'vue';
import Home from '../views/home.vue';
import Setting from '../views/setting.vue';
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            name:'setting',
            path:'/setting',
            component:Setting
        },
        {
            name:'home',
            path:'/home',
            component:Home
        }
    ]
})