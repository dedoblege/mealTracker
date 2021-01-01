<template>
  <meal-form :title="pageTitle" :formType="formAction"></meal-form>
</template>

<script>
import MealForm from "@/components/MealForm.vue"

export default {
  name: "MealUpdate",
  components: {
    MealForm,
  },
  data: function() {
    return {
      pageTitle: "Update a meal",
      formAction: "update",
    }
  },
}
</script>
