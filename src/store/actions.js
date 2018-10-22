/*
通过mutation间接更新state的多个方法的对象
 */

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO
} from './mutation-types'

import {
    reqAddress,
    reqCategorys,
    reqShops,
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
        const result = await reqShops({latitude, longitude})
        if(result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },

    //同步记录用户信息
    recordUser({commit},userInfo) {
        commit(RECEIVE_USER_INFO,{userInfo})
    }
}
