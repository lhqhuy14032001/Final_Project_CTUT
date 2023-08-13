import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { registerGlobalComponent } from "@/ultils/import";

import "@/assets/css/global.css";
import "@/assets/css/tailwind.css";

const app = createApp(App);
registerGlobalComponent(app);
app.use(store);
app.use(router);
app.mount("#app");
