<template>
  <meal-list :title="pageTitle" :pageSize="elementsInPage"></meal-list>
</template>

<script>
import MealList from "@/components/MealList.vue"

export default {
  name: "MealHistory",
  components: {
    MealList,
  },
  data: function() {
    return {
      pageTitle: "Meal history",
      elementsInPage: 6,
    }
  },
}
</script>
