// Import global styles
import "./assets/styles/main.scss";

// Create app
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App).use(i18n);

// Plugins
import router from "./router";
import store from "./store";
import i18n from "./i18n";
app.use(store).use(router);

// Shared components
import sharedComponents from "./shared";
Object.values(sharedComponents).forEach((component) => {
  app.component(component.name, component);
});

// Icons
import "@/icons";

// Mount
app.mount("#app");
