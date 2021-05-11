<template>
  <nav
    class="bg-dc1 flex flex-col flex-none space-y-4 overflow-y-auto no-scrollbar p-3"
  >
    <div
      class="rounded-full flex-none bg-gray-500 w-12 h-12"
      @click="$store.dispatch('setCurrentServer', { ...defaultServer })"
    ></div>
    <div
      v-for="server in servers"
      :key="server.id"
      class="rounded-full flex items-center justify-center flex-none bg-gray-700 w-12 h-12"
      @click="$store.dispatch('setCurrentServer', { ...server })"
    >
      <h1 class="font-bold tracking-widest">
        {{ getNameInitials(server.name) }}
      </h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ServerListTab",
  data() {
    return {
      servers: [],
      defaultServer: {
        id: 0,
        name: 'My Server',
        initial: 'MS',
      }
    };
  },
  mounted() {
    this.fetchServers();
  },
  methods: {
    async fetchServers() {
      try {
        const res = await fetch("https://reqres.in/api/unknown");
        const data = await res.json();
        this.servers = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    getNameInitials(name = "") {
      const names = name.split(" ");
      const initials = names.map((n) => n[0]);
      return initials.join("").toUpperCase();
    },
  },
};
</script>

<style scoped>
div:hover {
  /* background-color: rgba(255,255,255,0.1); */
  color: #fff;
  cursor: pointer;
  border-radius: 1rem;
}
</style>