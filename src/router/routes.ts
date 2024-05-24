import LoanView from "@/views/LoanView.vue";
import LoanApprovedView from "@/views/LoanApprovedView.vue";
import LoanDeniedView from "@/views/LoanDeniedView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoanView,
    },
    {
      path: "/approved",
      name: "approved",
      component: LoanApprovedView,
    },
    {
      path: "/denied",
      name: "denied",
      component: LoanDeniedView,
    },
    {
      path: "/:catchAll(.*)",
      name: "pageNotFound",
      component: PageNotFoundView,
    },
  ],
});

export default router;
