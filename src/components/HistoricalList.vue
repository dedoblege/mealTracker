<template>
  <div class="history__container">
    <div class="history__title">
      <h1>Meals history</h1>
    </div>
    <div class="history__list">
      <!-- TODO v-for -->
      <div class="history__list-element">
        <div class="history__list__element-title">
          {{ mealDate }}
        </div>
        <div class="history__list__element-content">
          {{ mealType }}
          {{ mealContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mealDate: "2020/12/29",
      mealType: "Breakfast",
      mealContent: "Spaghetti carbonara",
    }
  },
}
</script>

<style scoped>
.history__container {
  margin: 2rem 3rem 3rem 3rem;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-gap: 1.1rem;
  justify-items: start;
  align-items: center;
}

.history__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
}

.history__list {
  display: grid;
  grid-template-rows: 33% 33% 33%;
  grid-gap: 1.1rem;
  justify-items: start;
  align-items: center;
}

.history__list-element {
  font-size: 1.1rem;
}

.history__list__element-title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
}

.history__list__element-content {
  display: block;
}
</style>
