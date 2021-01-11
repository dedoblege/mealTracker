<template>
  <div class="about__container">
    <div class="about__content-logo">
      <img
        src="@/assets/logos/mini_logo.png"
        class="about__content__logo-img"
        alt="mini_logo"
      />
    </div>
    <div class="about__content">
      Made with
      <span class="heart">&hearts;</span>
      by GONGUTOR
    </div>
  </div>
</template>

<style scoped>
.about__container {
  height: 100%;
  display: grid;
  grid-template-areas:
    "logo"
    "signature";
  grid-template-rows: 70% 30%;
  align-items: center;
  justify-items: center;
}

.about__content-logo {
  grid-area: logo;
  box-shadow: 0px 0px 15px 12px var(--light-shade-02);
  background: var(--light-shade-02);
}

.about__content__logo-img {
  height: 200px;
}

.about__content {
  grid-area: signature;
  font-size: 1.2rem;
  align-self: start;
}

.heart {
  color: var(--higlight-color-dark-00);
  font-size: 1.8rem;
}
</style>
