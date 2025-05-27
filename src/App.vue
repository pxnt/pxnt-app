<template>
  <Home />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import Home from './views/Home.vue'

onBeforeMount(() => {
  if (window.location.pathname !== '/') {
    window.history.replaceState({}, '', '/')
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
