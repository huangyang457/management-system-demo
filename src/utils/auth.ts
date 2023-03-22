import {TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'
// 设置登录时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, String(Date.now()))
}

// 获取
export const getTokenTime = ()=> {
  return localStorage.getItem(TOKEN_TIME)
}

// 是否已经过期
export const diffTokenTime = () => {
  const currentTime = Date.now()
  const tokenTime:any = getTokenTime()
  return Number(currentTime) - Number(tokenTime) > TOKEN_TIME_VALUE
}