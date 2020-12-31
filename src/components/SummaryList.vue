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

//see https://www.positronx.io/vue-js-firebase-build-vue-crud-app-with-cloud-firestore/
</script>

<style scoped>
.summary__container {
  margin: 1rem 2rem 2rem 2rem;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-gap: 2rem;
  justify-items: start;
}

.summary__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
  justify-self: center;
}

.summary__list {
  display: grid;
  grid-template-rows: 7rem 7rem 7rem;
  grid-gap: 1.3rem;
  justify-items: start;
}

.summary__list-element {
  font-size: 1.1rem;
}
</style>
