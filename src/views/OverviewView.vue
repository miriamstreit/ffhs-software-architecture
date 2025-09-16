<template>
  <h1>Good Afternoon Miriam 👋</h1>
  <RecordsList :records="records" />
</template>

<script>
import { mapGetters } from "vuex";

import RecordsList from "@/components/RecordsList.vue";

export default {
  name: "HomeView",
  components: {
    RecordsList,
  },
  computed: {
    ...mapGetters(["records"]),
  },
};
</script>
