import header from './header'
import page from './page'
import formItem from './formItem'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('my-page', page)
        Vue.component('my-form-item', formItem)
    }
}
