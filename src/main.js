import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/index.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";

const app = createApp(App);

const project = {
  logo: {
    width: "150",
    url: "https://janten.topcoatdata.app/static/images/topcoat-logo-color-on-white.svg",
  },
  nav: [
    ...routes.map((route) => {
      return {
        url: route.path,
        title: route.name,
      };
    }),
  ],
};

app.config.globalProperties.project = project;
app.config.globalProperties.navSelected = (
  url,
  selected_classes,
  unselected_classes
) => {
  if (url == window.location.pathname) return selected_classes;
  else return unselected_classes;
};

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(createPinia());
app.mount("#app");
