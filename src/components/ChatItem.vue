<template>
  <div
    class="chat-item flex items-baseline px-5 py-0.5 mt-1 hover:bg-dc3 hover:bg-opacity-60"
  >
    <span class="flex-none text-xs text-txt2 w-9 text-right mr-2">{{
      timestamp || "--:--"
    }}</span>
    <span
      class="flex-none text-white font-bold mr-2"
      :class="[this.admin && 'text-green-400']"
      >{{ user }}</span
    >
    <span class="flex-auto text-txt3 break-all">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
    message: String,
    admin: Boolean,
    timestamp: String,
  },
};
</script>

<style></style>
