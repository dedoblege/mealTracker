<template>
  <meal-form :title="pageTitle" :formType="formAction"></meal-form>
</template>

<script>
import MealForm from "@/components/MealForm.vue"

export default {
  name: "MealCreation",
  components: {
    MealForm,
  },
  data: function() {
    return {
      pageTitle: "Add a meal",
      formAction: "create",
    }
  },
}
</script>
