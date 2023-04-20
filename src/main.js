/* eslint-disable */
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

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
import Panel from "primevue/panel";
import Datatable from "primevue/datatable";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Primevue);

app.component("Card", Card);
app.component("Button", Button);
app.component("Panel", Panel);
app.component("Datatable", Datatable);
app.component("Toolbar", Toolbar);
app.component("InputText", InputText);
app.component("Column", Column);
app.component("Row", Row);
app.component("ColumnGroup", ColumnGroup);

app.mount("#app");
