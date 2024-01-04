// store.js
import { createStore } from "vuex";

const store = createStore({
  state: {
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
  actions: {},
  getters: {},
});

export default store;
