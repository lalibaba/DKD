import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api'
export default {
  namespaced: true,
  state: {
    token: getToken() // 从cookies中获取token（cookies获取不到为undefined,）
  },
  mutations: {
    // 储存token函数
    setToken(state, token) {
      setToken(token) // 将token存入cookies
      state.token = token // 将token存入vuex
    },
    // 删除token函数
    removeToken(state) {
      state.token = null
      removeToken()
    }
  },
  actions: {
    async login(context, data) {
      try {
        // 发送登录请求
        const res = await login(data)
        context.commit('setToken', res.token)
        return res
      } catch (e) { console.dir(e) }
    }
  }
}
