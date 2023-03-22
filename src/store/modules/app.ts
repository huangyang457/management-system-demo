import { login as loginApi } from "@/api/login";
import router from "@/router";
import { setTokenTime } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state:any, token:any) {
      state.token = token,
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({commit}:any, userInfo:any) {
      return new Promise<void>((resolve, reject) => {
        loginApi(userInfo).then((res:any) => {
          console.log(res);
          commit('setToken', res.token)
          router.replace('/')
          setTokenTime()
          resolve()
        }).catch((error:any) => {
          
          reject(error)
        })
      })
    },
    logout({commit}:any){
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  }
}