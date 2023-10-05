import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import CKEditor from "@ckeditor/ckeditor5-vue";

import { registerGlobalComponent } from "@/ultils/import";

import VCalendar from "v-calendar";
import "v-calendar/style.css";

import "@/assets/css/main.css";

const stores = createPinia();
const app = createApp(App);
registerGlobalComponent(app);
app.use(stores);
app.use(router);
app.use(CKEditor);
// Use plugin with optional defaults
app.use(VCalendar, {
  color: "#5fcf86",
});

app.mount("#app");
