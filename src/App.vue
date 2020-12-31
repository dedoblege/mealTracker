<template>
  <the-header></the-header>
  <div class="main">
    <router-view />
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue"
import TheFooter from "./components/layout/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
#app {
  font-family: var(--font-standard), Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
