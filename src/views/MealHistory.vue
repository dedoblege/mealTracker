<template>
  <meals-list :title="pageTitle"></meals-list>
</template>

<script>
import MealsList from "@/components/MealsList.vue"

export default {
  name: "MealHistory",
  components: {
    MealsList,
  },
  data: function() {
    return {
      pageTitle: "Meals history",
    }
  },
}
</script>
