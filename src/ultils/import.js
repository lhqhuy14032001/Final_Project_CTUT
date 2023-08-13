import { defineAsyncComponent } from "vue";
const registerGlobalComponent = (app) => {
  app.component(
    "administrationLayout",
    defineAsyncComponent(() => import("@/layouts/administrationLayout"))
  );
  app.component(
    "clientLayout",
    defineAsyncComponent(() => import("@/layouts/clientLayout"))
  );
  app.component(
    "ownerLayout",
    defineAsyncComponent(() => import("@/layouts/ownerLayout"))
  );
};
export { registerGlobalComponent };
