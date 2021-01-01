<template>
  <meals-list :title="pageTitle" :dataToRetrieve="maxElements"></meals-list>
</template>

<script>
import MealsList from "@/components/MealsList.vue"

export default {
  name: "Home",
  components: {
    MealsList,
  },
  data: function() {
    return {
      pageTitle: "Last meals",
      maxElements: 9,
    }
  },
}
</script>
