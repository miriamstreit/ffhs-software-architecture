import { createRouter, createWebHistory } from "vue-router";
import urls from "./urls";
import OverviewView from "@/views/OverviewView.vue";
import FriendsView from "@/views/FriendsView.vue";
import CreateRecordView from "@/views/CreateRecordView.vue";
import LoginView from "@/views/LoginView.vue";

import store from "@/store/index.js";

const routes = [
  {
    path: urls.LOGIN_PAGE,
    name: "Login",
    component: LoginView,
  },
  {
    path: urls.OVERVIEW_PAGE,
    name: "home",
    component: OverviewView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: urls.FRIENDS_PAGE,
    name: "Friends",
    component: FriendsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: urls.CREATE_RECORD_PAGE,
    name: "newRecord",
    component: CreateRecordView,
    meta: {
      requiresAuth: true,
    },
  },
  // TODO add edit record later
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ path: urls.LOGIN_PAGE });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
