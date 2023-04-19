import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Primevue from "primevue/config";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Primevue);
app.mount("#app");
