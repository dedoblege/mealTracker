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
  font-family: var(--font-headers), sans-serif;
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--light-shade-01);
  background: var(--higlight-color-dark-00);
  outline: none;
  text-decoration: none;
  justify-self: center;
  box-shadow: 1px 1px 5px var(--dark-shade-02);
  min-width: 38vw;
}

.smaller-button {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  margin: 0.7rem;
  padding: 0.7rem;
  border: none;
  border-radius: 30px;
  font-family: var(--font-headers), sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--light-shade-01);
  background: var(--higlight-color-dark-01);
  outline: none;
  text-decoration: none;
  justify-self: center;
  box-shadow: 1px 1px 5px var(--dark-shade-02);
  min-width: 31vw;
}

.generic__button:disabled,
.smaller-button:disabled {
  color: var(--dark-shade-01);
  background: var(--higlight-color-light-00);
}

.generic__button:hover,
.generic__button:active,
.smaller-button:hover,
.smaller-button:active {
  box-shadow: 2px 2px 8px var(--dark-shade-00);
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .generic__button {
    margin: 1.5rem;
    padding: 1.2rem;
    border-radius: 50px;
    font-size: 1.3rem;
    min-width: 35vw;
  }

  .smaller-button {
    margin: 1rem;
    padding: 1rem;
    border-radius: 50px;
    font-size: 1.15rem;
    min-width: 25vw;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .generic__button {
    min-width: 25vw;
  }

  .smaller-button {
    min-width: 18vw;
  }
}
</style>
