<template>
  <header class="main-header header">
    <div class="header__container">
      <div class="header__element" id="home">
        <router-link to="/">
          <img
            src="@/assets/logos/mini_logo.png"
            alt="mini_logo"
            class="header__logo"
          />
        </router-link>
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
  background-color: var(--light-shade-015);
  width: 100%;
  height: 3rem;
  font-family: var(--font-headers), sans-serif;
  box-shadow: 2px 2px 5px var(--light-shade-02);
}

.header__container {
  display: grid;
  grid-template-columns: 40% 30% 30%;
  justify-items: end;
}

.header__logo {
  height: 2.2rem;
}

#home {
  justify-self: start;
  padding: 0.5rem;
}

.header__element {
  padding: 1rem;
}

.header__element a {
  color: var(--dark-shade-005);
  text-decoration: none;
  font-weight: 600;
}

.header__element a:hover,
.header__element a:active,
.header__element a.router-link-active {
  color: var(--higlight-color-dark-01);
  text-decoration: none;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .header {
    height: 3.5rem;
  }

  .header__logo {
    height: 2.8rem;
  }

  .header__element a {
    font-size: 1.2rem;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .header__container {
    grid-template-columns: 10% 10% auto;
    justify-items: start;
  }

  .header__element a {
    font-size: 1.2rem;
  }
}
</style>
