<template>
  <div class="history__container">
    <meal-list :title="pageTitle" :pageSize="elementsInPage"></meal-list>
  </div>
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
<style scoped>
.history__container {
  height: 100%;
}
</style>
