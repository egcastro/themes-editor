import { createRouter, createWebHistory } from "vue-router";
import TestPage from "./pages/TestPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "TestPage",
      component: TestPage,
    },
  ],
});

export default router;
