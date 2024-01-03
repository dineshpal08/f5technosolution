import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "./styles/main.css";
import store from "./store/store";

const vuetify = createVuetify();

createApp(App).use(store).use(vuetify).mount("#app");
