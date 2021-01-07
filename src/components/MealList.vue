<template>
  <div class="meal-list__container">
    <div class="meal-list__title">
      <h1>{{ title }}</h1>
    </div>
    <div class="meal-list__list">
      <div
        class="meal-list__list-element"
        v-for="meal in savedMeals"
        :key="meal.id"
        @click="goToUpdateMeal(meal.id)"
      >
        <div class="meal-list__list__element-title">
          {{ meal.date }}
        </div>
        <div class="meal-list__list__element-content">
          <b>{{ meal.type }}</b>
        </div>
        <div class="meal-list__list__element-content">
          {{ meal.content }}
        </div>
      </div>
    </div>
    <div class="meal-list__buttons">
      <base-button
        mode="generic__button"
        :disabled="!prevBtn"
        @click="goToPrevPage"
        >&lt; Previous</base-button
      >
      <base-button
        mode="generic__button"
        :disabled="!nextBtn"
        @click="goToNextPage"
        >Next &gt;</base-button
      >
    </div>
  </div>
</template>

<script>
import { mealsCollection } from "../firebaseDb"

export default {
  props: {
    title: String,
    pageSize: Number,
  },
  data: function() {
    return {
      savedMeals: [],
      numberOfMeals: 0,
      first: null,
      last: null,
      firstOfAll: null,
      lastOfAll: null,
    }
  },
  computed: {
    prevBtn: function() {
      if (
        this.first &&
        this.first.id &&
        this.firstOfAll &&
        this.firstOfAll.id
      ) {
        return this.first.id !== this.firstOfAll.id
      } else {
        return false
      }
    },
    nextBtn: function() {
      if (this.last && this.last.id && this.lastOfAll && this.lastOfAll.id) {
        return this.last.id !== this.lastOfAll.id
      } else {
        return false
      }
    },
  },
  created() {
    this.getNumberOfMeals()
    this.getHistoryMeals()
  },
  methods: {
    async getNumberOfMeals() {
      await mealsCollection.orderBy("date", "desc").onSnapshot((element) => {
        element.forEach(() => {
          this.numberOfMeals++
          this.lastOfAll = element.docs[this.numberOfMeals - 1]
        })
      })
    },
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
          this.first = snapshotChange.docs[0]
          this.last = snapshotChange.docs[snapshotChange.docs.length - 1]
          this.firstOfAll = this.first
        })
    },
    goToUpdateMeal(mealId) {
      this.$router.push({
        name: "MealUpdate",
        params: { mealId: mealId },
      })
    },
    async goToPrevPage() {
      await mealsCollection
        .orderBy("date", "desc")
        .endBefore(this.first)
        .limitToLast(this.pageSize)
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
          this.first = snapshotChange.docs[0]
          this.last = snapshotChange.docs[snapshotChange.docs.length - 1]
        })
    },
    async goToNextPage() {
      await mealsCollection
        .orderBy("date", "desc")
        .startAfter(this.last)
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
          this.first = snapshotChange.docs[0]
          this.last = snapshotChange.docs[snapshotChange.docs.length - 1]
        })
    },
  },
}
</script>

<style scoped>
.meal-list__container {
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto 5rem;
  grid-gap: 2rem;
  justify-items: start;
}

.meal-list__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
  justify-self: center;
}

.meal-list__list {
  width: 95%;
  justify-self: center;
}

.meal-list__list-element {
  display: grid;
  grid-template-columns: 33% 66%;
  grid-template-rows: 40% 60%;
  border-radius: 30px;
  padding: 0.7rem;
  margin: 1.1rem 0 1.1rem 0;
  background: var(--primary-color);
  color: white;
  box-shadow: 1px 1px 5px var(--dark-shade-02);
}

.meal-list__list-element:hover,
.meal-list__list-element:active {
  background: var(--higlight-color-dark-00);
  color: var(--light-shade-01);
  box-shadow: 2px 2px 8px var(--dark-shade-00);
}

.meal-list__list__element-title {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  font-size: 1.3rem;
  padding: 0.1rem;
}

.meal-list__list__element-title:hover,
.meal-list__list__element-title:active {
  color: var(--light-shade-01);
}

.meal-list__list__element-content {
  justify-self: start;
  font-size: 1.2rem;
  padding: 0.1rem;
}

.meal-list__buttons {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .meal-list__list {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5rem;
  }

  .meal-list__list-element {
    justify-self: center;
    height: 12vh;
    width: 32vw;
    padding: 1.5rem;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .meal-list__container {
    height: 90vh;
  }

  .meal-list__list {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 0.5rem;
  }

  .meal-list__list-element {
    justify-self: center;
    height: 12vh;
    width: 20vw;
    padding: 1.5rem;
  }
}
</style>
