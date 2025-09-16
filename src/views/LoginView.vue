<template>
  <div class="grid">
    <div class="col-4" />
    <div class="col-4">
      <Card>
        <template #header>
          <h2>Login</h2>
        </template>
        <template #content>
          <div class="field">
            <label for="username">Benutzername</label>
            <InputText
              id="username"
              v-model="username"
              type="text"
              class="inputfield w-full"
            />
          </div>
          <div class="field">
            <label for="password">Passwort</label>
            <Password
              id="password"
              v-model="password"
              toggleMask
              :feedback="false"
              class="inputfield w-full"
              inputStyle="width: 100% !important"
            />
          </div>
          <div class="field">
            <Button
              icon="pi pi-sign-in"
              label="Login"
              @click="doLogin"
              class="login-button"
            />
            <small v-if="showError" class="p-error">{{
              $t("login.error")
            }}</small>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Password from "primevue/password";

import { mapActions, mapGetters } from "vuex";

import { OVERVIEW_PAGE } from "@/router/urls.js";

export default {
  data() {
    return {
      username: null,
      password: null,
      showError: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    doLogin() {
      this.login({ username: this.username, password: this.password });
      if (this.isLoggedIn) {
        this.$router.replace(OVERVIEW_PAGE);
      } else {
        this.showError = true;
      }
    },
    ...mapActions(["login", "checkIfAlreadyLoggedIn"]),
  },
  created() {
    this.checkIfAlreadyLoggedIn();
    if (this.isLoggedIn) {
      this.$router.replace(OVERVIEW_PAGE);
    }
  },
  components: {
    InputText,
    Password,
  },
};
</script>

<style scoped>
.login-button {
  width: 100%;
}
</style>
