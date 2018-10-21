<template>
    <div class="star" :class="`star-${size}`">
        <span class="star-item" v-for="(sc,index) in StarClasses" :class="sc" :key="index"></span>
    </div>
</template>

<script>

    const CLASS_ON = 'on'
    const CLASS_HALF = 'half'
    const CLASS_OFF = 'off'

    export default {
        props: {
            score: Number,
            size: Number
        },

        computed: {
            //评星计算
            StarClasses() {
                const {score} = this
                const scs =[]
                //获取整数部分
                const scoreInteger = Math.floor(score)
                for (let i = 0; i < scoreInteger; i++) {
                    scs.push(CLASS_ON)
                }
                if( (score*10 - scoreInteger*10) > 5 ){
                    scs.push(CLASS_HALF)
                }
                //不满5个星添加灰色的星星
                while (scs.length < 5) {
                    scs.push(CLASS_OFF)
                }
                //想scs添加n个on、half、off
                return scs

            }
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">

    @import "../../common/stylus/mixins.styl"
    .star //2x图 3x图
        float left
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('./images/star48_on')
                &.half
                    bg-image('./images/star48_half')
                &.off
                    bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star36_on')
                &.half
                    bg-image('./images/star36_half')
                &.off
                    bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
</style>
