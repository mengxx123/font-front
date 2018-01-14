import Vue from 'vue'
import Router from 'vue-router'

const Font = resolve => require(['@/views/Font'], resolve)
const Seal = resolve => require(['@/views/Seal'], resolve)
const Home = resolve => require(['@/views/Home'], resolve)
const FontDetail = resolve => require(['@/views/FontDetail'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Help = resolve => require(['@/views/Help'], resolve)
const Copyright = resolve => require(['@/views/Copyright'], resolve)

const Logo = resolve => require(['@/views/Logo'], resolve)
const Download = resolve => require(['@/views/Download'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/fonts',
        component: Font
    },
    {
        path: '/seal',
        component: Seal
    },
    {
        path: '/fonts/:id',
        component: FontDetail
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/logo',
        component: Logo
    },
    {
        path: '/logo/download',
        component: Download
    },
    {
        path: '/help',
        component: Help
    },
    {
        path: '/copyright',
        component: Copyright
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
