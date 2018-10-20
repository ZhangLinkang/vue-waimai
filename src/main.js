/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(router)

new Vue({
    el: '#app',
    render: c => c(App),
    router: router,
    store: store
})
