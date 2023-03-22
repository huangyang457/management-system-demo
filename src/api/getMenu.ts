import request from "./request";

export const getMenu = () => {
  return request({
    url: '/menus',
    method: 'get'
  })
}