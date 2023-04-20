/* eslint-disable */
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";

import { createApp } from "vue";

//Core
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//Components PrimeVue
import Primevue from "primevue/config";
import Card from "primevue/card";
import Button from "primevue/button";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Primevue);

app.component("Card", Card);
app.component("Button", Button);

app.mount("#app");
