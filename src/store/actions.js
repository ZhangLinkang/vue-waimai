/*
通过mutation间接更新state的多个方法的对象
 */

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

import {
    reqAddress,
    reqCategorys,
} from '../api'

export default {
    //异步获取地址
    async getAddress ({commit, state}) {
        console.log(commit);
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
        const result = await reqCategorys()
        //提交一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },

    async getShops ({commit, state}) {
        const {latitude, longitude} = state
        const shops = await reqShops({latitude, longitude})
        commit(RECEIVE_SHOPS, {shops})
    }
    //异步湖区食品分类列表
    //异步获取商家列表
}
