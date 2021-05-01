<template>
  <div class="flex h-12 px-2 items-center text-txt2 clickable-highlight">
    <div class="rounded-full flex-none bg-green-400 w-8 h-8 mr-3"></div>
    <div class="flex-auto truncate">
      <p class="text-base truncate">{{userName}}</p>
      <p class="text-xs font-bold truncate text-txt2">{{userStatus}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserSummary',
    props: {
      userName: String,
      userStatus: String,
    },
    data() {
      return {}
    },
  }
</script>