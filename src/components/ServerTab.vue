<template>
  <div class="bg-dc3 w-60 flex flex-col flex-none">
    <div class="bg-dc1 flex-none">
      <div class="server__title bg-dc3 px-4 h-12 flex items-center justify-between shadow rounded-tl-xl">
        <h1 class=" font-bold truncate">My Server lorem</h1>
        <svg class="w-6 h-6 flex-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="overflow-y-scroll flex-auto auto-scrollbar">
      <channel-list />
    </div>
    <user-control />
  </div>
</template>

<script>
  import ChannelList from "./ChannelList"
  import UserControl from "./UserControl"
  export default {
    name: 'ServerTab',
    components: {
      ChannelList,
      UserControl,
    }
  }
</script>

<style scoped>
  .server__title:hover {
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    cursor: pointer;
  }
</style>