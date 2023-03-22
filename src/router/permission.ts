import router from ".";
import store from "@/store";
import { diffTokenTime, setTokenTime } from '@/utils/auth'

const whiteList: any = ['/login']
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (diffTokenTime()) {
      store.dispatch('app/logout')
      next('/login')
      return Promise.reject(new Error('token 失效了'))
    }
    setTokenTime()
    if (to.path === '/login') {
      next('/layout')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})