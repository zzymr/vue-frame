import * as http  from './api.js'
import apis from './apis.js'


// 我的主页
export const meHomeApi = {
  // 常用功能接口
  // funs(data) {
  //   return http.getRequest('/Me/v1.0/mineCommonFunction/getFirstPageFunction',apis.me_,data).then((response) => {
  //     return response.data
  //   })
  // }

}
// 我的财富
export const meFortuneApi = {
  // 我的钱包
  // wallet(data) {
  //   return http.getRequest('/v1.0/account/selectAccountsByUserId',apis.cltb_,data).then((response) => {
  //     return response.data
  //   })
  // }

}

// 我的事业
export const meCareerApi = {
  // 业绩与分润
  // shareper(data) {
  //   return http.getRequest('/v1.0/share_per/accountId',apis.yylm_,data).then((response) => {
  //     return response.data
  //   })
  // }

}

// 我的商业
export const meBusinessApi = {

  // 我的收藏
  // collect(data) {
  //   return http.getRequest('/qt/collect/v1/collectList',apis.mall_,data).then((response) => {
  //     return response.data
  //   })
  // }

}
