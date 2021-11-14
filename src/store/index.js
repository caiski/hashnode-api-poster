import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: '',
    publicationId: '',
  },
  mutations: {
    apiKey(state, newApiKey){
      state.apiKey = newApiKey
    },
    publicationId(state, newPublicationId) {
      state.publicationId = newPublicationId
    }
  },
  actions: {
    login({ commit }, { apiKey, publicationId }) {
      commit('apiKey', apiKey)
      commit('publicationId', publicationId)
    },
    logout({ commit }) {
      commit('apiKey', '')
      commit('publicationId', '')
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.apiKey && !!state.publicationId
    }
  }
})
