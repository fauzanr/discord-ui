<template>
  <nav class="bg-dc1 flex flex-col flex-none space-y-4 overflow-y-auto no-scrollbar p-3">
    <div class="rounded-full flex-none bg-gray-500 w-12 h-12"></div>
    <div v-for="(_, i) in Array(12)" :key="i" class="rounded-full flex-none bg-gray-700 w-12 h-12"></div>
  </nav>
</template>

<script>
  export default {
    name: 'ServerListTab',
  }
</script>

<style scoped>
  div:hover {
    /* background-color: rgba(255,255,255,0.1); */
    color: #fff;
    cursor: pointer;
    border-radius: 1rem;
  }
</style>