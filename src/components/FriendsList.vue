<template>
  <Divider align="left" class="mt-4">
      <div class="inline-flex align-items-center">
          <i class="pi pi-star mr-2"></i>
          <b>Freunde</b>
      </div>
  </Divider>  
  <FriendRecord v-for="friend in friends" :key="friend.id" :friend="friend" />
</template>

<script>
import FriendRecord from "@/components/FriendRecord.vue";

export default {
  props: {
    friends: Array,
  },
  components: {
    FriendRecord,
  },
};
</script>
