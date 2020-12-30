<template>
  <summary-list></summary-list>
  <router-view />
</template>

<script>
import SummaryList from "@/components/SummaryList.vue"

export default {
  name: "Home",
  components: {
    SummaryList,
  },
}
</script>
