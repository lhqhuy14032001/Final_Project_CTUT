import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { registerGlobalComponent } from "@/ultils/import";
// lightbox
import VueEasyLightbox from "vue-easy-lightbox";
// calendar
import VCalendar from "v-calendar";
import "v-calendar/style.css";
// global css
import "@/assets/css/main.css";
// google login
import vue3GoogleLogin from "vue3-google-login";
// init store
const stores = createPinia();
stores.use(piniaPluginPersistedstate);
const app = createApp(App);
registerGlobalComponent(app);
app.use(vue3GoogleLogin, {
  clientId:
    "52032724170-22h6tkkf6s2emrh5utj1m2msa96p6h0t.apps.googleusercontent.com",
});
app.use(stores);
app.use(router);
app.use(CKEditor);
// Use plugin with optional defaults
app.use(VCalendar, {
  color: "#5fcf86",
});
app.use(VueEasyLightbox);

app.mount("#app");
