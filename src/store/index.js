import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'123456789'
  },
  getters:{
    gettoken:(state)=>{
      return state.token+'哈哈'
    }
  },
  mutations: {
    chanageToken(state,nn){
      state.token='00000000'+nn
    }
  },
  actions: {
    ajaxchanagetoken({state,commit,getters},data){
      setTimeout(() => {
        commit('chanageToken',data)
      }, 1000);
    }
  },
  modules: {
  }
})
