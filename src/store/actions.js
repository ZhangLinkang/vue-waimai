/*
通过mutation间接更新state的多个方法的对象
 */

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    REST_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT
} from './mutation-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo
} from '../api'

export default {
    //异步获取地址
    async getAddress ({commit, state}) {
        console.log(commit)
        //发送异步ajax请求
        const geohash = `${state.latitude},${state.longitude}`
        const result = await reqAddress(geohash)
        //提交一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    async getCategorys ({commit}) {
        //发送异步ajax请求
        //const geohash = `${state.latitude},${state.longitude}`
        const result = await reqFoodCategorys()
        //提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },

    async getShops ({commit, state}) {
        const {latitude, longitude} = state
        const result = await reqShops({latitude, longitude})
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },

    //同步记录用户信息
    recordUser ({commit}, userInfo) {
        commit(RECEIVE_USER_INFO, {userInfo})
    },

    //雨布获取用户信息
    async getUserInfo ({commit}) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, {userInfo})
        }
    },

    //异步请求退出
    async logout ({commit}) {
        const result = await reqLogout()
        if (result.code === 0) {
            commit(REST_USER_INFO)
        }
    },

    /**
     * 获取商家的信息
     * @param commit
     * @returns {Promise<void>}
     */
    async getShopInfo ({commit}) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, {info})
        }
    },

    async getShopGoods ({commit}, callback) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, {goods})
        }
        callback && callback()
    },
    //同步更新food中的count值
    updateFoodCount ({commit}, {isAdd, food}) {
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, {food})
        } else {
            commit(DECREMENT_FOOD_COUNT, {food})
        }
    }
}
