import { createStore } from "vuex";
import { channels } from "../data/data";

export default createStore({
  state: {
    showUserTab: true,
    currentServer: {
      id: 0,
      name: "My Server",
      initial: "MS",
    },
    currentChannel: { ...channels[0] },
    currentUser: {
      name: "guest",
    },
    channels: channels,
  },
  getters: {
    isUserTabOpen: (state) => {
      return state.showUserTab === true;
    },
  },
  mutations: {
    setShowUserTab(state, payload) {
      state.showUserTab = payload.value;
    },
    setCurrentChannel(state, payload) {
      const channelId = payload;
      const targetChannel = state.channels.find(
        (channel) => channel.id === channelId
      );
      if (targetChannel) state.currentChannel = targetChannel;
    },
    setCurrentServer(state, payload) {
      state.currentServer = { ...payload };
    },
    pushChat(state, payload) {
      const { channelName, chat } = payload;
      const targetChannel = state.channels.find(
        (channel) => channel.name === channelName
      );
      if (targetChannel) {
        targetChannel.chats = [...targetChannel.chats, chat];
        state.currentChannel = targetChannel;
      }
    },
  },
  actions: {
    openUserTab({ commit }) {
      commit("setShowUserTab", { value: true });
    },
    closeUserTab({ commit }) {
      commit("setShowUserTab", { value: false });
    },
    toggleUserTab({ state, commit }) {
      commit("setShowUserTab", { value: !state.showUserTab });
    },
    changeCurrentChannel({ commit }, payload) {
      const channelId = payload;
      commit("setCurrentChannel", channelId);
    },
    setCurrentServer({ commit }, payload) {
      const newCurrentServer = payload;
      commit("setCurrentServer", newCurrentServer);
    },
    sendMessage({ commit }, payload) {
      const { channelName, chat } = payload;
      commit("pushChat", { channelName, chat });
    },
  },
});
