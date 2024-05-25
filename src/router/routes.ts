import LoanView from "@/views/LoanView.vue";
import LoanApprovedView from "@/views/LoanApprovedView.vue";
import LoanDeniedView from "@/views/LoanDeniedView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import { ROUTE_PATHS } from "@/router/paths";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE_PATHS.HOME,
      name: ROUTE_PATHS.HOME,
      component: LoanView,
    },
    {
      path: ROUTE_PATHS.APPROVED,
      name: ROUTE_PATHS.APPROVED,
      component: LoanApprovedView,
    },
    {
      path: ROUTE_PATHS.DENIED,
      name: ROUTE_PATHS.DENIED,
      component: LoanDeniedView,
    },
    {
      path: ROUTE_PATHS.PAGE_NOT_FOUND,
      name: ROUTE_PATHS.PAGE_NOT_FOUND,
      component: PageNotFoundView,
    },
  ],
});

export default router;
