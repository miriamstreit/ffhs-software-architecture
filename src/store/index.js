import sha256 from "crypto-js/sha256";
import { createStore } from "vuex";

import { getDateOnlyAsString } from "@/helpers/functions.js";

export default createStore({
  state: {
    token: null,
    records: [
      {
        id: 1,
        exercise: "Squat",
        category: "weight",
        date: getDateOnlyAsString(new Date(2021, 11, 25)),
        weight: 85,
        reps: 1,
      },
      {
        id: 2,
        exercise: "Bench Press",
        category: "weight",
        date: getDateOnlyAsString(new Date(2021, 10, 29)),
        weight: 52.5,
        reps: 1,
      },
      {
        id: 3,
        exercise: "Cycling (indoor)",
        category: "cardio",
        date: getDateOnlyAsString(new Date(2022, 4, 25)),
        time: "00:05:00",
        distance: 2.0,
      },
      {
        id: 4,
        exercise: "Hip Thrust",
        category: "weight",
        date: getDateOnlyAsString(new Date(2021, 9, 5)),
        weight: 100,
        reps: 5,
      },
    ],
    friends: [
      {
        id: 1,
        name: "Nico",
        records: [
          {
            id: 11,
            exercise: "Bench Press",
            category: "weight",
            date: getDateOnlyAsString(new Date(2021, 12, 25)),
            weight: 55,
            reps: 1,
          },
          {
            id: 12,
            exercise: "Upright Row",
            category: "weight",
            date: getDateOnlyAsString(new Date(2022, 4, 28)),
            weight: 15,
            reps: 12,
          },
        ],
      },
      { id: 2, name: "Dany", records: [] },
    ],
  },
  mutations: {
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = null;
    },
  },
  actions: {
    login(context, payload) {
      let token = null;
      token = sha256(
        payload.username + payload.password + getDateOnlyAsString(new Date())
      ).toString();

      localStorage.setItem("token", token);

      context.commit("login", token);
    },
    checkIfAlreadyLoggedIn(context) {
      const token = localStorage.getItem("token");
      if (token != null) {
        context.commit("login", token);
      }
    },
    logout(context) {
      localStorage.removeItem("token");
      context.commit("logout");
    },
  },
  getters: {
    isLoggedIn(state) {
      return (
        // user: miriam, pw: 1234
        state.token ==
        sha256("miriam" + "1234" + getDateOnlyAsString(new Date())).toString()
      );
    },
    friends(state) {
      return state.friends;
    },
    friendById(state, id) {
      return state.friends.filter((friend) => friend.id == id);
    },
    records(state) {
      return state.records;
    },
    recordById(state, id) {
      return state.records.filter((pr) => pr.id == id);
    },
  },
});
