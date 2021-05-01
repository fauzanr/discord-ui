<template>
  <section>
    <div class="flex items-center text-txt2 p-1">
      <button class="flex flex-grow focus:outline-none items-center clickable truncate" @click="toggleChannels">
        <svg class="w-4 h-4 flex-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!showChannels" fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
          <path v-else fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
        <p class="font-bold uppercase truncate" :title="groupName">{{groupName}}</p>
      </button>
      <button class="focus:outline-none clickable">
        <svg class="w-6 h-6 flex-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div v-if="showChannels" class="pb-4">
      <slot />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ChannelGroup',
    props: {
      groupName: String,
    },
    data() {
      return {
        showChannels: true,
      }
    },
    methods: {
      toggleChannels() {
        this.showChannels = !this.showChannels
      }
    }
  }
</script>