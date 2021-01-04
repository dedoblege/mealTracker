<template>
  <div class="form__container">
    <div class="form__title">
      <h1>{{ title }}</h1>
    </div>
    <form class="form__content" v-if="formType === createForm">
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
        <base-button mode="generic__button" @click="onFormCreate"
          >Create</base-button
        >
      </div>
    </form>
    <form class="form__content" v-else-if="formType === updateForm">
      <div v-for="selectedMeal in selectedMeals" :key="selectedMeal.id">
        <div class="form__content-element">
          <input
            name="when"
            type="text"
            placeholder="MM/DD/YYYY"
            onfocus="(this.type='date')"
            v-model="selectedMeal.date"
            required
          />
        </div>
        <div class="form__content-element">
          <select name="which" v-model="selectedMeal.type" required>
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
            v-model="selectedMeal.content"
            required
          ></textarea>
        </div>
        <div class="form__content-element">
          <base-button
            mode="generic__button"
            @click="onFormUpdate($event, selectedMeal)"
            >Update</base-button
          >
          <base-button
            mode="generic__button"
            @click="onFormDelete($event, selectedMeal)"
            >Delete</base-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue"
import { mealsCollection } from "../firebaseDb"
import firebase from "firebase"

export default {
  name: "MealForm",
  components: {
    BaseButton,
  },
  data() {
    return {
      selectedMeals: {
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
      this.getMeal(this.$route.params.mealId)
    }
  },
  methods: {
    async getMeal(mealId) {
      await mealsCollection
        .where(firebase.firestore.FieldPath.documentId(), "==", mealId)
        .onSnapshot((snapshotChange) => {
          this.selectedMeals = []
          snapshotChange.forEach((existingMeal) => {
            this.selectedMeals.push({
              id: existingMeal.id,
              date: existingMeal.data().date,
              type: existingMeal.data().type,
              content: existingMeal.data().content,
            })
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
          this.$router.push({
            name: "Home",
            params: "",
          })
        })
        .catch((error) => {
          this.$toast.show("Oops, an error occurred!")
          console.log(error)
        })
    },
    async onFormUpdate(event, selectedMeal) {
      event.preventDefault()
      await mealsCollection
        .doc(selectedMeal.id)
        .update({
          date: selectedMeal.date,
          type: selectedMeal.type,
          content: selectedMeal.content,
        })
        .then(() => {
          this.$toast.show("Meal successfully updated!")
          this.$router.push({
            name: "Home",
            params: "",
          })
        })
        .catch((error) => {
          this.$toast.show("Oops, an error occurred!")
          console.log(error)
        })
    },
    async onFormDelete(event, selectedMeal) {
      event.preventDefault()
      await mealsCollection
        .doc(selectedMeal.id)
        .delete()
        .then(() => {
          this.$toast.show("Meal successfully deleted!")
          this.$router.push({
            name: "Home",
            params: "",
          })
        })
        .catch((error) => {
          this.$toast.show("Oops, an error occurred!")
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
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  height: 72.5vh;
}

.form__title {
  font-family: var(--font-title), serif;
  font-size: 1.3rem;
}

.form__content-element input,
.form__content-element select,
.form__content-element textarea {
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
  color: var(--dark-shade-02);
  background: var(--light-shade-01);
}

.form__content-element input:focus,
.form__content-element select:focus,
.form__content-element textarea:focus {
  outline: none;
}

@media (min-width: 40rem) and (min-height: 40rem) {
  .form__container {
    height: 80vh;
  }
  .form__content {
    width: 60vw;
  }
  .form__content-element input,
  .form__content-element select,
  .form__content-element textarea {
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
  .form__content-element input,
  .form__content-element select,
  .form__content-element textarea {
    margin: 1.5rem;
    padding: 1.2rem;
    border-radius: 50px;
    font-size: 1.3rem;
  }
}
</style>
