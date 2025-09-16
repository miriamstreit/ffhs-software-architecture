<template>
  <Card class="mt-4">
    <template #header>
      <h3 class="card-header">{{ record.exercise }}</h3>
    </template>
    <template #content>
      <p class="card-subheader"> <i class="pi pi-calendar" />  {{ record.date }}</p>
      <p v-if="record.category == 'weight'">
        {{ record.reps + "x"}} <b>{{record.weight}}kg</b>
      </p>
      <p v-else>
        {{ record.distance + "km / "}} <b>{{record.time + "h" }}</b>
      </p>
    </template>
    <!-- <template #footer>
        <Button icon="pi pi-times" label="Share" class="p-button-secondary p-button-text" />
    </template>     -->
  </Card>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
      default: () => ({
        id: 0,
        exercise: "",
        category: "weight",
        date: null,
        weight: 0,
        reps: 0,
        time: "0:00:00",
        distance: 0.0,
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

.card-subheader {
  opacity: 0.75;
  margin-top: -25px;
  margin-bottom: 25px;
  font-size: 14px;
}

.card-subheader .pi {
  font-size: 14px;
}

</style>