// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categoryList: [],
    nowCategory: {}
  },
  mutations: {
    setCategoryList: (state, categoryList) => {
      state.categoryList = categoryList
    },
    setNowCategory: (state, nowCategory) => {
      state.nowCategory = nowCategory
    }
  }
})

export default store
