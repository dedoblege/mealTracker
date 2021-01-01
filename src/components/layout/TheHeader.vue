<template>
  <header class="main-header header">
    <div class="header__container">
      <div class="header__element" id="home">
        <router-link to="/">Home</router-link>
      </div>
      <div class="header__element">
        <router-link to="/meal-history">History</router-link>
      </div>
      <div class="header__element">
        <router-link to="/meal-creation">New meal</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  background-color: var(--light-shade-01);
  width: 100%;
  height: 7.5vh;
  font-family: var(--font-headers), sans-serif;
}

.header__container {
  display: grid;
  grid-template-columns: 40% 30% 30%;
  justify-items: end;
}

#home {
  justify-self: start;
}

.header__element {
  padding: 1rem;
}

.header__element a {
  color: var(--dark-shade-01);
  text-decoration: none;
  font-weight: 600;
}

.header__element a:hover,
.header__element a:active,
.header__element a.router-link-active {
  color: var(--higlight-color-darker);
  text-decoration: none;
  font-weight: 600;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .header {
    height: 6.5vh;
  }

  .header__element a {
    font-size: 1.2rem;
  }
}
</style>
