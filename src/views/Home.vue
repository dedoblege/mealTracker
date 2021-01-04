<template>
  <div class="home__container">
    <div class="home__logo">
      <img src="@/assets/logos/meal_tracker_logo.gif" alt="main_logo" />
    </div>
    <div class="home__button" id="btn-history">
      <base-button mode="generic__button" link :to="historyLink"
        >See history</base-button
      >
    </div>
    <div class="home__button" id="btn-add_meal">
      <base-button mode="generic__button" link :to="addMealLink"
        >Add meal</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {}
  },
  computed: {
    historyLink() {
      return this.$route.path + "meal-history"
    },
    addMealLink() {
      return this.$route.path + "meal-creation"
    },
  },
}
</script>

<style scoped>
.home__container {
  display: grid;
  grid-template-areas:
    "logo logo"
    "btn-history btn-add_meal";
  grid-template-rows: 70vh 15vh;
  grid-template-columns: 50% 50%;
}

.home__logo {
  grid-area: logo;
  margin: 5rem 0;
  grid-column: 1 / span 2;
  justify-self: center;
  align-self: center;
}

.home__button {
  justify-self: center;
  align-self: start;
}

.home__button-btn {
  border: none;
  background: var(--higlight-color);
  border-radius: 30px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-headers), sans-serif;
  color: var(--dark-shade-01);
}

#btn-history {
  grid-area: btn-history;
}
#btn-add_meal {
  grid-area: btn-add_meal;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .home__container {
    display: grid;
    grid-template-areas:
      "logo"
      "btn-history"
      "btn-add_meal";
    grid-template-rows: 60vh 15vh 15vh;
    grid-template-columns: 100%;
  }

  .home__logo {
    justify-self: center;
    align-self: center;
  }

  .home__button {
    justify-self: center;
    align-self: center;
  }

  .home__button-btn {
    padding: 1.6rem;
    font-size: 1.6rem;
  }
}
</style>
