import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "initial",
      redirect: "dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/admin/dashboard/Dashboard.vue"),
    },
  ],
});

router.beforeEach((to, from) => {

  // return from.name;
});

export default router;
