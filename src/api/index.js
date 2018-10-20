/*
包含n个接口请求函数
 */
import ajax from './ajax'
//const BASE_URL ='http://localhost:4000'
const BASE_URL = '/api'

/**
 * 根据经纬度获取位置信息
 */
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

/**
 * 获取食品分类列表
 */
export const reqCategorys = () => ajax(`${BASE_URL}/index_category`)

/**
 * 根据经纬度获取附近的店铺
 * @param latitude 精度
 * @param longitude 维度
 */
export const reqShops = ({latitude, longitude}) => ajax(`${BASE_URL}/shops`, {latitude, longitude})
