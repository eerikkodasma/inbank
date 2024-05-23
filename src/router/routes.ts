import LoanView from "@/views/LoanView.vue";
import LoanApprovedView from "@/views/LoanApprovedView.vue";
import LoanDeniedView from "@/views/LoanDeniedView.vue";
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
      name: "Approved",
      component: LoanApprovedView,
    },
    {
      path: "/denied",
      name: "Denied",
      component: LoanDeniedView,
    },
  ],
});

export default router;
