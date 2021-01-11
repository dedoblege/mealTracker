<template>
  <div class="form__container">
    <div class="form__title">
      {{ title }}
    </div>
    <form class="form__content">
      <!-- @submit.prevent="submitSignIn"> -->
      <div class="form__content-element">
        <input
          name="user"
          type="text"
          placeholder="User"
          v-model="user"
          required
        />
      </div>
      <div class="form__content-element">
        <input
          name="password"
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <div class="form__content-element">
        <base-button type="submit" mode="generic__button">Sign In</base-button>
      </div>
      <div class="form__content-extra">
        <div class="form__content__extra-element">
          Not a member?
        </div>
        <div class="form__content__extra-element">
          <base-button type="button" mode="smaller-button" to="/register"
            >Register</base-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue"

export default {
  name: "LoggingForm",
  components: {
    BaseButton,
  },
  props: {
    title: String,
  },
  data() {
    return {
      user: "",
      password: "",
    }
  },
  methods: {
    // submitSignIn() {
    // event.preventDefault()
    // await mealsCollection
    //   .add(newMeal)
    //   .then(() => {
    //     this.$toast.show("Meal successfully tracked!")
    //     newMeal.date = ""
    //     newMeal.type = ""
    //     newMeal.content = ""
    //     this.$router.push({
    //       name: "Home",
    //       params: "",
    //     })
    //   })
    //   .catch((error) => {
    //     this.$toast.show("Oops, an error occurred!")
    //     console.log(error)
    //   })
    // },
  },
}
</script>

<style scoped>
.form__container {
  height: 100%;
  display: grid;
  grid-template-rows: 8rem auto;
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
}

.form__title {
  font-family: var(--font-title), serif;
  font-size: 2.5rem;
  font-weight: bold;
}

.form__content {
  align-self: start;
}

.form__content .form__content-element input {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  width: 90%;
  margin: 0.7rem;
  padding: 1rem;
  border: none;
  border-radius: 30px;
  font-family: var(--font-standard), sans-serif;
  font-size: 1.2rem;
  color: var(--dark-shade-03);
  background: var(--light-shade-015);
}

.form__content-element input:focus {
  outline: none;
}

.form__content-extra {
  font-size: 1.2rem;
  margin: 1.5rem;
  color: var(--higlight-color-dark-01);
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .form__container {
    grid-template-rows: 15rem auto;
  }
  .form__content {
    width: 60vw;
    align-self: start;
  }
  .form__content-element input {
    margin: 1.5rem;
    padding: 1.2rem;
    border-radius: 50px;
    font-size: 1.2rem;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .form__container {
    height: 80vh;
  }
  .form__content {
    width: 50vw;
  }
  .form__content-element input {
    margin: 1.5rem;
    padding: 1.2rem;
    border-radius: 50px;
    font-size: 1.3rem;
  }
}
</style>
