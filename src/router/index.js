import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import ErrorPage from '../pages/errorpage.vue'
import Test from '../pages/test.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ErrorPage
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
})
