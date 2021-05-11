import { createStore} from 'vuex'
import { channels } from '../data/data'

export default createStore({
  state: {
    showUserTab: true,
    currentServer: {
      id: 0,
      name: 'My Server',
      initial: 'MS',
    },
    currentChannel: channels[0]
  },
  getters: {
    isUserTabOpen: state => {
      return state.showUserTab === true
    }
  },
  mutations: {
    setShowUserTab(state, payload) {
      state.showUserTab = payload.value
    },
    setCurrentChannel(state, payload) {
      state.currentChannel = { ...payload }
    },
    setCurrentServer(state, payload) {
      state.currentServer = { ...payload }
    },
  },
  actions: {
    openUserTab({ commit }) {
      commit('setShowUserTab', { value: true })
    },
    closeUserTab({ commit }) {
      commit('setShowUserTab', { value: false })
    },
    toggleUserTab({ state, commit }) {
      commit('setShowUserTab', { value: !state.showUserTab })
    },
    setCurrentChannel({ commit }, payload) {
      const newCurrentChannel = payload
      commit('setCurrentChannel', newCurrentChannel)
    },
    setCurrentServer({ commit }, payload) {
      const newCurrentServer = payload
      commit('setCurrentServer', newCurrentServer)
    },
  },
})