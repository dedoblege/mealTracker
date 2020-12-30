<template>
  <div class="summary__container">
    <div class="summary__title">
      <h1>Last meals</h1>
    </div>
    <div class="summary__list">
      <div class="summary__list-element">Element 1</div>
      <div class="summary__list-element">Element 2</div>
      <div class="summary__list-element">Element 3</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.summary__container {
  margin: 2rem 3rem 3rem 3rem;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-gap: 1.1rem;
  justify-items: start;
  align-items: center;
}

.summary__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
}

.summary__list {
  display: grid;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 1.1rem;
  justify-items: start;
  align-items: center;
}

.summary__list-element {
  font-size: 1.1rem;
}
</style>
