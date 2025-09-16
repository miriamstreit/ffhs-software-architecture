<template>
  <!-- <nav>
    <Button
      label="Logout"
      class="p-button-text p-button-secondary"
      @click="doLogout"
      v-if="isLoggedIn"
    />
  </nav> -->
  <div class="content">
    <router-view />
  </div>
  <Toolbar class="bottom-fix">
      <template #start>
          <Button label="Records" icon="pi pi-star-fill" class="p-button-text p-button-secondary" @click="goRecords"/>
          <i class="pi pi-minus p-toolbar-separator rotate" />
          <Button label="Friends" icon="pi pi-users" class="p-button-text p-button-secondary" badge="2" badgeClass="p-badge-secondary" @click="goFriends"/>
      </template>
  </Toolbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LOGIN_PAGE, FRIENDS_PAGE, OVERVIEW_PAGE } from "@/router/urls.js";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    doLogout() {
      this.logout();
      this.$router.replace(LOGIN_PAGE);
    },
    goFriends() {
      this.$router.replace(FRIENDS_PAGE);
    },
    goRecords() {
      this.$router.replace(OVERVIEW_PAGE); 
    },
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0px;
  padding: 0px;
}

h1 {
  font-size: 35px;
}

h3 {
  font-size: 20px;
}

.p-toolbar {
  justify-content: center !important;
}

.content {
  padding: 40px 30px;
  height: 92vh;
  overflow-y: scroll;
}

.rotate {
  transform: rotate(90deg);
}
.bottom-fix {
  width: 100%;
}
</style>
