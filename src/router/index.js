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
    {
      path: "/salesman",
      name: "salesman",
      component: () => import("../views/salesman/Salesman.vue"),
    },
    {
      path: "/stores",
      name: "stores",
      component: () => import("../views/stores/Stores.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("../views/events/Events.vue"),
    },
    {
      path: "/routes",
      name: "routes",
      component: () => import("../views/routes/Routes.vue"),
    },
    {
      path: "/cities",
      name: "cities",
      component: () => import("../views/cities/Cities.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  // return from.name;
});

export default router;
