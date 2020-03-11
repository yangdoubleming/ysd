import { login, logout, getInfo } from '@/api/login'
import { getUser, setUser, removeUser } from '@/utils/auth'

const user = {
  state: {
    user: getUser(),
    menus: {}
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    }
  },

  actions: {
    // 登录
    Login({ commit }, token) {
      return new Promise((resolve, reject) => {
        login(token).then(response => {
          setUser(response)
          commit('SET_USER', response);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER', '')
        removeUser()
        resolve()
      })
    }
  }
}

export default user
