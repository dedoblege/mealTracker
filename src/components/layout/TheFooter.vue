<template>
  <footer>
    <div class="footer__container">
      <div class="footer__element">
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  background-color: var(--light-shade-015);
  width: 100%;
  height: 55px;
  font-family: var(--font-headers), sans-serif;
  box-shadow: 2px -2px 5px var(--light-shade-02);
}

.footer__container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__element a {
  color: var(--dark-shade-005);
  text-decoration: none;
}

.footer__element a:hover,
.footer__element a:active,
.footer__element a.router-link-active {
  color: var(--higlight-color-dark-01);
  text-decoration: none;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .footer__element a {
    font-size: 1.2rem;
  }
}
</style>
