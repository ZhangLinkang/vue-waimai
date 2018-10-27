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
export const reqFoodCategorys = () => ajax(`${BASE_URL}/index_category`)

/**
 * 根据经纬度获取附近的店铺
 * @param latitude 精度
 * @param longitude 维度
 */
export const reqShops = ({latitude, longitude}) => ajax(`${BASE_URL}/shops`, {latitude, longitude})

/**
 * 根据经纬度和关键字搜索商家列表
 * @param geohash
 * @param keyword
 */
export const reqSearchShop = (geohash, keyword) => ajax(`${BASE_URL}/search_shops`, {geohash, keyword})
//export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
/**
 * 用户名密码登录
 * @param name  用户名
 * @param pwd   密码
 */
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(`${BASE_URL}/login_pwd`, {name, pwd, captcha}, 'POST')

/**
 * 发送短信验证码
 * @param phone
 */
export const reqSendCode = (phone) => ajax(`${BASE_URL}/sendcode`, {phone})

/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax(`${BASE_URL}/login_sms`, {phone, code}, 'POST')

/**
 * 根据会话获取用户信息
 */
export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo`)

/**
 * 用户退登
 */
export const reqLogout = () => ajax(`${BASE_URL}/logout`)

/**
 * 获取商家信息
 */
export const reqShopGoods = () => ajax('/goods')

/**
 * 获取商家评论数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')
