/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

//注册全局组件标签
Vue.component(Button.name,Button)

Vue.use(router)

new Vue({
    el: '#app',
    render: c => c(App),
    router: router,
    store: store
})
