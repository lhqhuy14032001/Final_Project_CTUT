import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import { registerGlobalComponent } from "@/ultils/import";

import "@/assets/css/main.css";

const stores = createPinia();
const app = createApp(App);
registerGlobalComponent(app);
app.use(stores);
app.use(router);
app.mount("#app");
