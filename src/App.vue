<template>
  <div class="page-wrapper">
    <the-header></the-header>
    <div class="main">
      <router-view />
    </div>
    <the-footer></the-footer>
  </div>
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

.page-wrapper {
  font-family: var(--font-standard), sans-serif;
  color: var(--dark-shade-00);
  margin: 0;
  background-color: var(--light-shade-01, white);
}

.main {
  height: calc(100vh - 110px);
  overflow-y: auto;
  padding: 1.5rem 0;
}
</style>
