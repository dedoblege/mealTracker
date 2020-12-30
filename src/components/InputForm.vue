<template>
  <div class="form__container">
    <div class="form__title">
      <h1>Add a meal</h1>
    </div>
    <form class="form__content">
      <div class="form__content-element">
        <input
          name="when"
          type="text"
          placeholder="MM/DD/YYYY"
          onfocus="(this.type='date')"
        />
      </div>
      <div class="form__content-element">
        <select name="which">
          <option value="placeholder" id="default-which">Type of meal</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div class="form__content-element">
        <textarea
          name="what"
          rows="5"
          cols="30"
          placeholder="Describe your meal"
        ></textarea>
      </div>
      <div class="form__content-element">
        <button class="form__content-btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputForm",
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
.form__content-btn {
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

.form__content-btn {
  width: 60%;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--light-shade-00);
  background: var(--higlight-color);
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
  .form__content-btn {
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
  .form__content-btn {
    margin: 1.5rem;
    padding: 1.5rem;
    border-radius: 50px;
  }
}
</style>
