// store.js
import { createStore } from "vuex";

// Define your store modules, state, mutations, actions, etc.
const store = createStore({
  state: {
    users: [
      {
        name: "vikash",
        age: "26",
      },
    ],
    data: [],
    incerment: 1,
  },
  mutations: {
    ADD_USER_DATA(state, payload) {
      state.data.push(payload);
    },
    INCREMENT_SLIDER(state, payload) {
      state.incerment = payload;
    },
  },
  actions: {
    // Your actions go here
  },
  getters: {
    // Your getters go here
  },
  // Add more modules if needed
});

export default store;
