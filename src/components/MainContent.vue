<template>
  <div class="flex flex-col flex-auto">
    <navbar />
    <div class="flex flex-auto overflow-y-hidden bg-dc4">
      <div class="flex-grow">
        <channel-room />
      </div>
      <keep-alive>
        <component v-if="$store.getters.isUserTabOpen" :is="'UserList'" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ChannelRoom from "./ChannelRoom";
import Navbar from "./Navbar";
import UserList from "./UserList";
export default {
  name: "MainContent",
  components: {
    Navbar,
    UserList,
    ChannelRoom,
  },
  data() {
    return {};
  },
  computed: {
    isUserListOpen() {
      return this.$store.getters.isUserTabOpen;
    },
  },
  methods: {},
};
</script>
