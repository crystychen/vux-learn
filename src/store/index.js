import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 如果在模块化构建系统中, 请确保在开头调用了Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    tabbarShow: true,
    tabIndex: 0
  },
  mutations: {
    showTabBar (state, tabbarShow) {
      state.tabbarShow = tabbarShow
    },
    hideTabBar (state, tabbarShow) {
      state.tabbarShow = tabbarShow
    },
    changeTabIndex (state, tabIndex) {
      state.tabIndex = tabIndex
      console.log(tabIndex)
    }
  },
  actions: {
    showTabBar ({commit}) {
      commit('showTabBar', true)
    },
    hideTabBar ({commit}) {
      commit('hideTabBar', false)
    }
  }
})
