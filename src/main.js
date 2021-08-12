import filters from "./common/filters";
import App from "./App.vue";
import { createApp } from "vue";

const app = createApp(App);

app.config.globalProperties.$filters = filters;

app.mount("#app");
