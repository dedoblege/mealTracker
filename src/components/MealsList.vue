<template>
  <div class="meals-list__container">
    <div class="meals-list__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="meals-list__list">
      <div
        class="meals-list__list-element"
        v-for="meal in savedMeals"
        :key="meal.id"
        @click="goToUpdateMeal(meal.id)"
      >
        <div class="meals-list__list__element-title">
          {{ meal.date }}
        </div>
        <div class="meals-list__list__element-content">
          <b>{{ meal.type }}</b>
        </div>
        <div class="meals-list__list__element-content">
          {{ meal.content }}
        </div>
      </div>
    </div>
    <div class="meals-list__buttons">
      <base-button mode="generic__button">&lt; Previous</base-button>
      <base-button mode="generic__button">Next &gt;</base-button>
    </div>
  </div>
</template>

<script>
import { mealsCollection } from "../firebaseDb"

export default {
  data: function() {
    return {
      savedMeals: [],
      pageSize: 12,
    }
  },
  props: {
    title: String,
  },
  created() {
    this.getHistoryMeals()
  },
  methods: {
    async getHistoryMeals() {
      await mealsCollection
        .orderBy("date", "desc")
        .limit(this.pageSize)
        .onSnapshot((snapshotChange) => {
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
    goToUpdateMeal(mealId) {
      this.$router.push({
        name: "MealUpdate",
        params: { mealId: mealId },
      })
    },
  },
}
</script>

<style scoped>
.meals-list__container {
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto 5rem;
  grid-gap: 2rem;
  justify-items: start;
}

.meals-list__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
  justify-self: center;
}

.meals-list__list {
  width: 95%;
  justify-self: center;
}

.meals-list__list-element {
  display: grid;
  grid-template-columns: 33% 66%;
  grid-template-rows: 40% 60%;
  border-radius: 30px;
  padding: 0.7rem;
  margin: 1.1rem 0 1.1rem 0;
  background: var(--higlight-color);
}

.meals-list__list__element-title {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  font-size: 1.3rem;
  color: var(--dark-shade-02);
  padding: 0.1rem;
}

.meals-list__list__element-content {
  justify-self: start;
  font-size: 1.2rem;
  padding: 0.1rem;
}

.meals-list__buttons {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .meals-list__list {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5rem;
  }
  .meals-list__list-element {
    justify-self: center;
    height: 15vh;
    width: 38vw;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .meals-list__container {
    height: 90vh;
  }

  .meals-list__list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 0.3rem;
  }

  .meals-list__list-element {
    justify-self: center;
    height: 15vh;
    width: 20vw;
  }
}
</style>
