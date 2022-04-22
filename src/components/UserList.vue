<template>
  <div
    class="flex flex-col flex-none bg-dc3 w-60 overflow-y-scroll auto-scrollbar"
  >
    <section class="pt-4">
      <p class="font-bold uppercase truncate ml-4 text-xs text-txt2">
        users-{{ usersFromAPI.length }}
      </p>
      <div class="ml-2">
        <user-summary
          userName="fauzanr"
          userStatus="Admin"
          admin
          online
          picUrl="https://avatars.githubusercontent.com/u/28147405?s=96&v=4"
        />
      </div>
      <div v-for="user in usersFromAPI" :key="user.id" class="ml-2">
        <user-summary
          :userName="user.username"
          :userStatus="user.address?.street"
        />
      </div>
    </section>
  </div>
</template>

<script>
import UserSummary from "./UserSummary";
import { users } from "../data/data";
export default {
  name: "UserList",
  components: {
    UserSummary,
  },
  data() {
    return {
      users: [],
      usersFromAPI: [],
    };
  },
  created() {
    this.users = users;
  },
  async mounted() {
    await this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        this.usersFromAPI = users;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
