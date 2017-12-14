import Vue from 'vue'
import Router from 'vue-router'

const Font = resolve => require(['@/views/Font'], resolve)
const FontDetail = resolve => require(['@/views/FontDetail'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Help = resolve => require(['@/views/Help'], resolve)
const Copyright = resolve => require(['@/views/Copyright'], resolve)

const Logo = resolve => require(['@/views/Logo'], resolve)
const Download = resolve => require(['@/views/Download'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

const APP_NAME = '云设'

let routes = [
    {
        path: '/',
        component: Font,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/fonts/:id',
        component: FontDetail,
        meta: {
            title: '字体详情'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/logo',
        component: Logo,
        meta: {
            title: 'Logo'
        }
    },
    {
        path: '/logo/download',
        component: Download,
        meta: {
            title: '下载'
        }
    },
    {
        path: '/help',
        component: Help,
        meta: {
            title: '帮助'
        }
    },
    {
        path: '/copyright',
        component: Copyright,
        meta: {
            title: '帮助'
        }
    },
    {
        path: '/404',
        component: Error404,
        meta: {
            title: '页面找不到了'
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
]

function getTitle(title) {
    if (title) {
        return title
    } else {
        return APP_NAME
    }
}

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

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
