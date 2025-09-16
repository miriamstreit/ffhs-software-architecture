<template>
  <Card class="mt-4">
    <template #header>
      <h2 class="card-header">{{ friend.name }}</h2>
    </template>
    <template #content>
      <p v-if="friend.records.length < 1">
        Keine persönlichen Rekorde vorhanden
      </p>
      <p v-else v-for="record in records" :key="record.id">
        {{
          `${record.exercise}: ${
            record.category == "weight"
              ? record.reps + "x" + record.weight
              : record.distance + "km / " + record.time + "h"
          }`
        }}
      </p>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      default: () => ({
        id: 0,
        name: "",
        records: [],
      }),
    },
  },
  computed: {
    records() {
      return this.friend?.records || [];
    },
  },
};
</script>

<style scoped>
.p-card {
  background-color: #f9f9f9;
}

.card-header {
  padding-left: 1rem;
  padding-top: 1.5rem;
}
</style>