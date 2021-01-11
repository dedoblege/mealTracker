<template>
  <logging-form :title="pageTitle"></logging-form>
</template>

<script>
import LoggingForm from "@/components/LoggingForm.vue"

export default {
  name: "SignIn",
  components: {
    LoggingForm,
  },
  data: function() {
    return {
      pageTitle: "Sign In",
    }
  },
}
</script>
