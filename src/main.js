import Vue from 'vue'
import App from './App'
import router from './router'
import './scss/main.scss'
import ui from './components/index'
import http from '@/util/http'

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.use(ui)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
