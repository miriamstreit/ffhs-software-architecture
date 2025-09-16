<template>
  <Divider align="left" class="mt-4">
      <div class="inline-flex align-items-center">
          <i class="pi pi-star mr-2"></i>
          <b>Rekorde</b>
      </div>
  </Divider>
  <!-- <router-link to="/create">Neuer Rekord hinzufügen</router-link> | -->
  <PersonalRecord v-for="record in records" :key="record.id" :record="record" />
</template>

<script>
import PersonalRecord from "@/components/PersonalRecord.vue";

export default {
  props: {
    records: Array,
  },
  components: {
    PersonalRecord,
  },
};
</script>

<style>
.p-divider.p-divider-horizontal:before {
    color: #2c3e50;
    border-top: 1.75px solid #2c3e50 !important;
  }
</style>
