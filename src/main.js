// main.js or main.vue
import "vuetify/styles"; // Ensure this line is present
import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "./styles/main.css";
import store from "./store/store"; // Adjust the path accordingly

const vuetify = createVuetify(/* your vuetify options */);

createApp(App)
  .use(store) // Use the Vuex store
  .use(vuetify)
  .mount("#app");
