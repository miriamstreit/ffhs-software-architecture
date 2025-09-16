<template>
  <h1>Good Afternoon Miriam 👋</h1>
  <FriendsList :friends="friends" />
</template>

<script>
import { mapGetters } from "vuex";

import FriendsList from "@/components/FriendsList.vue";

export default {
  name: "FriendsView",
  components: {
    FriendsList
  },
  computed: {
    ...mapGetters(["friends"]),
  },
};
</script>
