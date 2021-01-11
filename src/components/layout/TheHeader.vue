<template>
  <header>
    <div class="header__container">
      <div class="header__element__home">
        <router-link to="/">
          <img
            src="@/assets/logos/mini_logo.png"
            alt="mini_logo"
            class="header__logo"
          />
        </router-link>
      </div>
      <div class="header__element__links">
        <div class="header__element__links-item">
          <router-link to="/meal-history">History</router-link>
        </div>
        <div class="header__element__links-item">
          <router-link to="/meal-creation">New meal</router-link>
        </div>
        <div class="header__element__links-item item-logging" v-if="true">
          <router-link to="/signIn">Sign in</router-link>
        </div>
        <div class="header__element__links-item item-logging" v-else>
          <router-link to="/signOut">Sign out</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background-color: var(--light-shade-015);
  width: 100%;
  height: 55px;
  font-family: var(--font-headers), sans-serif;
  box-shadow: 2px 2px 5px var(--light-shade-02);
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.header__element__home {
  flex-basis: 30%;
  display: flex;
}

.header__logo {
  height: 2.2rem;
}
.header__element__links {
  flex-basis: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header__element__links-item a {
  color: var(--dark-shade-005);
  text-decoration: none;
  font-weight: 600;
}

.header__element__links-item a:hover,
.header__element__links-item a:active,
.header__element__links-item a.router-link-active {
  color: var(--higlight-color-dark-01);
  text-decoration: none;
}

.item-logging a {
  border-radius: 30px;
  color: var(--light-shade-00) !important;
  background: var(--higlight-color-dark-00);
  padding: 0.4rem 0.7rem;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .header__logo {
    height: 2.6rem;
  }

  .header__element__links a {
    font-size: 1.2rem;
  }
}
</style>
