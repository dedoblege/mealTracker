<template>
  <div class="form__container">
    <div class="form__title">
      {{ title }}
    </div>
    <form class="form__content">
      <div v-for="mealElement in mealData" :key="mealElement.id">
        <div class="form__content-element">
          <input
            name="when"
            type="text"
            placeholder="MM/DD/YYYY"
            onfocus="(this.type='date')"
            v-model="mealElement.date"
            required
          />
        </div>
        <div class="form__content-element">
          <select name="which" v-model="mealElement.type" required>
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
            v-model="mealElement.content"
            required
          ></textarea>
        </div>
        <div class="form__content-element">
          <base-button
            mode="generic__button"
            :disabled="btnDisabled"
            @click="onFormCreate($event, mealElement)"
            v-if="formType === createForm"
            >Create</base-button
          >
          <base-button
            mode="generic__button"
            :disabled="btnDisabled"
            @click="onFormUpdate($event, mealElement)"
            v-if="formType === updateForm"
            >Update</base-button
          >
          <base-button
            mode="generic__button"
            @click="onFormDelete($event, mealElement)"
            v-if="formType === updateForm"
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
  props: {
    title: String,
    formType: String,
  },
  data() {
    return {
      mealData: [],
      mealElement: {
        id: "",
        date: "",
        type: "",
        content: "",
      },
      createForm: "create",
      updateForm: "update",
      btnDisabled: false,
    }
  },
  created() {
    if (this.$route.params && this.$route.params.mealId) {
      this.getMeal(this.$route.params.mealId)
    } else {
      this.mealData.push({
        id: "",
        date: "",
        type: "",
        content: "",
      })
    }
  },
  methods: {
    async getMeal(mealId) {
      await mealsCollection
        .where(firebase.firestore.FieldPath.documentId(), "==", mealId)
        .onSnapshot((snapshotChange) => {
          this.mealData = []
          snapshotChange.forEach((existingMeal) => {
            this.mealData.push({
              id: existingMeal.id,
              date: existingMeal.data().date,
              type: existingMeal.data().type,
              content: existingMeal.data().content,
            })
          })
        })
    },
    async onFormCreate(event, newMeal) {
      event.preventDefault()
      await mealsCollection
        .add(newMeal)
        .then(() => {
          this.$toast.show("Meal successfully tracked!")
          newMeal.date = ""
          newMeal.type = ""
          newMeal.content = ""
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
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto;
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
}

.form__title {
  font-family: var(--font-title), serif;
  font-size: 2.5rem;
  font-weight: bold;
  justify-self: center;
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
  color: var(--dark-shade-03);
  background: var(--light-shade-015);
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
