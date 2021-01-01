<template>
  <div class="form__container">
    <div class="form__title">
      <h1>{{ title }}</h1>
    </div>
    <form class="form__content">
      <div class="form__content-element">
        <input
          name="when"
          type="text"
          placeholder="MM/DD/YYYY"
          onfocus="(this.type='date')"
          v-model="newMeal.date"
          required
        />
      </div>
      <div class="form__content-element">
        <select name="which" v-model="newMeal.type" required>
          <option value="placeholder" id="default-which">Type of meal</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>
      <div class="form__content-element">
        <textarea
          name="what"
          rows="5"
          cols="30"
          placeholder="Describe your meal"
          v-model="newMeal.content"
          required
        ></textarea>
      </div>
      <div class="form__content-element">
        <button
          type="submit"
          class="form__content__btn-main"
          v-if="formType === createForm"
          @click="onFormCreate"
        >
          Create
        </button>
        <button
          type="submit"
          class="form__content__btn-main"
          v-if="formType === updateForm"
          @click="onFormUpdate"
        >
          Update
        </button>
        <button
          class="form__content__btn-delete"
          v-if="formType === updateForm"
          @click="onFormDelete"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mealsCollection } from "../firebaseDb"
export default {
  name: "MealForm",
  data() {
    return {
      selectedMeal: {
        date: "",
        type: "",
        content: "",
      },
      newMeal: {
        date: "",
        type: "",
        content: "",
      },
      createForm: "create",
      updateForm: "update",
    }
  },
  props: {
    title: String,
    formType: String,
  },
  created() {
    if (this.$route.params && this.$route.params.mealId) {
      console.log("I have the id ")
      console.log(this.$route.params.mealId)
      // this.getMeal(this.$route.params.mealId)
      this.getMeal()
      console.log("selected meal")
      console.log(this.selectedMeal.date)
      console.log(this.selectedMeal.type)
      console.log(this.selectedMeal.content)
    }
  },
  methods: {
    // async getMeal(mealId) {
    async getMeal() {
      await mealsCollection
        .where("type", "==", "Breakfast")
        .onSnapshot((snapshotChange) => {
          this.selectedMeal = []
          snapshotChange.forEach((existingMeal) => {
            this.selectedMeal.push({
              id: existingMeal.id,
              date: existingMeal.data().date,
              type: existingMeal.data().type,
              content: existingMeal.data().content,
            })
            console.log("existingMeal")
            console.log(existingMeal.data().date)
            console.log(existingMeal.data().type)
            console.log(existingMeal.data().content)
          })
        })
    },
    async onFormCreate(event) {
      event.preventDefault()
      await mealsCollection
        .add(this.newMeal)
        .then(() => {
          this.$toast.show("Meal successfully tracked!")
          this.newMeal.date = ""
          this.newMeal.type = ""
          this.newMeal.content = ""
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.form__container {
  margin: 2rem 3rem 3rem 3rem;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-gap: 1.1rem;
  justify-items: center;
  align-items: center;
}

.form__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
}

.form__content {
  font-size: 1.1rem;
}

.form__content-element input,
.form__content-element select,
.form__content-element textarea,
.form__content__btn-main,
.form__content__btn-delete {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  width: 90%;
  margin: 0.7rem;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  font-family: var(--font-standard), sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--dark-shade-02);
  background: var(--light-shade-01);
}

.form__content__btn-main,
.form__content__btn-delete {
  width: 60%;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--light-shade-00);
  background: var(--higlight-color-darker);
}

.form__content-element input:focus,
.form__content-element select:focus,
.form__content-element textarea:focus {
  outline: none;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .form__content {
    width: 40rem;
  }
  .form__content-element input,
  .form__content-element select,
  .form__content-element textarea,
  .form__content__btn-main,
  .form__content__btn-delete {
    margin: 1.5rem;
    padding: 1.5rem;
    border-radius: 50px;
  }
}

@media (min-width: 60rem) and (min-height: 60rem) {
  .form__content {
    width: 60rem;
  }
  .form__content-element input,
  .form__content-element select,
  .form__content-element textarea,
  .form__content__btn-main,
  .form__content__btn-delete {
    margin: 1.5rem;
    padding: 1.5rem;
    border-radius: 50px;
  }
}
</style>