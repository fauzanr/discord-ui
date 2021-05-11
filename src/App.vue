<template>
  <main class="app h-screen overflow-hidden">
    <div class="flex flex-row h-full text-txt1">
      <server-list-tab />
      <server-tab />
      <main-content />
    </div>
  </main>  
</template>

<script>
import "./assets/custom.css"
import './assets/tailwind.css'
import ServerListTab from "./components/ServerListTab"
import ServerTab from "./components/ServerTab"
import MainContent from "./components/MainContent"
export default {
  name: 'App',
  components: {
    ServerListTab,
    ServerTab,
    MainContent,
  },
}
</script>