<template>
  <div class="channel-room flex flex-col h-full">
    <div class="overflow-y-auto auto-scrollbar flex-auto" ref="chats">
      <div class="py-5 text-center">
        <h1 class="font-bold text-3xl">
          Welcome to #{{ currentChannel.name }}
        </h1>
      </div>
      <div class="channel-room__chats">
        <template v-for="chat in channelChats" :key="chat.id">
          <chat-item
            :user="chat.user"
            :message="chat.message"
            :admin="chat.admin"
            :timestamp="chat.timestamp"
          />
        </template>
        <div class="mt-5"></div>
      </div>
    </div>
    <div class="flex-none">
      <chat-input @send="onMessageSent" />
    </div>
  </div>
</template>

<script>
import ChatItem from "./ChatItem.vue";
import ChatInput from "./ChatInput.vue";
import { generateId, getTimestamp } from "../utils/util";
export default {
  components: { ChatItem, ChatInput },
  computed: {
    currentChannel() {
      return this.$store.state.currentChannel;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
    channelChats() {
      if (!this.currentChannel || !this.currentChannel.chats) return [];
      return this.currentChannel.chats;
    },
  },
  data() {
    return {};
  },
  watch: {
    currentChannel: {
      deep: true,
      handler() {
        this.$nextTick(() => this.scrollChat());
      },
    },
  },
  methods: {
    onMessageSent(data) {
      const newChat = {
        id: generateId(),
        channel: this.currentChannel.name,
        user: this.currentUser.name,
        message: data,
        timestamp: getTimestamp(),
      };
      this.$store.dispatch("sendMessage", {
        channelName: this.currentChannel.name,
        chat: newChat,
      });
    },
    scrollChat() {
      const chatRef = this.$refs.chats;
      const scrollHeight = chatRef.scrollHeight;
      chatRef.scrollTop = scrollHeight;
    },
  },
};
</script>

<style></style>
