<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
}
</script>

<style scoped>
.generic__button {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  margin: 0.7rem;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  font-family: var(--font-standard), sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--light-shade-00);
  background: var(--higlight-color-darker);
  outline: none;
  text-decoration: none;
  justify-self: center;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .generic__button {
    margin: 1.5rem;
    padding: 1.2rem;
    border-radius: 50px;
    font-size: 1.2rem;
    font-size: 1.5rem;
    width: 35vw;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .generic__button {
    margin: 1.5rem;
    padding: 1.2rem;
    border-radius: 50px;
    font-size: 1.3rem;
    font-size: 1.5rem;
    width: 25vw;
  }
}
</style>
