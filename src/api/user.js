// 提供用户相关接口调用函数
import request from '@/utils/request'

/**
 * 登录
 * @param {String} mobile - 手机号
 * @param {String} code - 验证码
 */
export const login = ({ mobile, code }) => {
  return request('app/v1_0/authorizations', 'post', {
    mobile,
    code
  })
}

/**
 * 关注用户
 * @param {Integer} userId
 */
export const followings = (userId) => {
  return request('/app/v1_0/user/followings', 'post', {
    target: userId
  })
}

/**
 * 取消关注用户
 * @param {Integer} userId
 */
export const unfollowings = (userId) => {
  return request(`/app/v1_0/user/followings/${userId}`, 'delete')
}
