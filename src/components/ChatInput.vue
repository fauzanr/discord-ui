<template>
  <div class="chat-input m-5 mt-0">
    <form @submit.prevent="submit">
      <div class="flex h-10 px-3 bg-dc5 rounded-md">
        <input
          type="text"
          class="w-full bg-transparent outline-none"
          :placeholder="'Message ' + `#${this.currentChannel.name}`"
          v-model.trim="message"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  computed: {
    currentChannel() {
      return this.$store.state.currentChannel;
    },
  },
  methods: {
    submit() {
      if (this.message) this.$emit("send", this.message);
      this.message = "";
    },
  },
};
</script>

<style></style>
