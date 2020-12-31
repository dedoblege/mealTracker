<template>
  <div class="history__container">
    <div class="history__title">
      <h1>Meal history</h1>
    </div>
    <div class="history__list">
      <div
        class="history__list-element"
        v-for="meal in savedMeals"
        :key="meal.id"
      >
        <div class="history__list__element-title">
          {{ meal.date }}
        </div>
        <div class="history__list__element-content">
          <b>{{ meal.type }}</b>
        </div>
        <div class="history__list__element-content">
          {{ meal.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb"

export default {
  data: function() {
    return {
      savedMeals: [],
    }
  },
  created() {
    db.collection("meals").onSnapshot((snapshotChange) => {
      this.savedMeals = []
      snapshotChange.forEach((meal) => {
        this.savedMeals.push({
          id: meal.id,
          date: meal.data().date,
          type: meal.data().type,
          content: meal.data().content,
        })
      })
    })
  },
}
</script>

<style scoped>
.history__container {
  margin: 1rem 2rem 2rem 2rem;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-gap: 2rem;
  justify-items: start;
}

.history__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
  justify-self: center;
}

.history__list {
  width: 90%;
  justify-self: center;
}

.history__list-element {
  display: grid;
  grid-template-columns: 33% 66%;
  grid-template-rows: 40% 60%;
  border-radius: 25px;
  padding: 1.1rem;
  margin: 1.8rem 0 1.8rem 0;
  background: var(--higlight-color);
}

.history__list__element-title {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  font-size: 1.3rem;
  color: var(--dark-shade-02);
  padding: 0.8rem 0.35rem 0.8rem 0.35rem;
}

.history__list__element-content {
  justify-self: start;
  font-size: 1.1rem;
  padding: 0.8rem 0.35rem 0.8rem 0.35rem;
}
</style>
