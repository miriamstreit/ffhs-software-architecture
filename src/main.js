import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/index.js";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Toolbar from 'primevue/toolbar';
import Divider from 'primevue/divider'

import "./registerServiceWorker";

import "primevue/resources/themes/saga-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);
/* eslint-disable */
app.component("Card", Card);
app.component("Button", Button);
app.component("Toolbar", Toolbar);
app.component("Divider", Divider);
/* eslint-enable */
app.use(PrimeVue);
app.use(router);
app.use(store);
app.mount("#app");
