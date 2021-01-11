<template>
  <div class="closing__container">
    <div class="closing__title">
      Thank you!
    </div>
    <div class="closing__image">
      <img
        src="@/assets/images/undraw_Login_re_4vu2.svg"
        alt="closing-icon"
        class="closing__image-img "
      />
    </div>
    <div class="closing__content">
      See you soon!
    </div>
  </div>
</template>

<script>
export default {
  name: "ClosingSession",
}
</script>

<style scoped>
.closing__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.closing__title {
  font-family: var(--font-title), serif;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 2rem;
}

.closing__image-img {
  height: 37vh;
  padding: 2rem;
}

.closing__content {
  font-size: 2rem;
  padding: 2rem;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .closing__image-img {
    height: 42vh;
    margin: 2rem;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .closing__image-img {
    height: 47vh;
    margin: 3rem;
  }
}
</style>
