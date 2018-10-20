<template>
    <div class="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    import actions from './store/actions'
    import store from './store'
    export default {

        mounted() {
            actions.getAddress(store,store.state);
            actions.getCategorys(store)
        },

        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background: #f5f5f5
        position relative
</style>
