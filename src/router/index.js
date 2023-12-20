import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "../stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/Home.vue"),
      meta: { layout: "page" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/Login.vue"),
      meta: { layout: "page" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/admin/dashboard/Dashboard.vue"),
    },
    {
      path: "/salesmans",
      name: "salesmans",
      component: () => import("@/views/salesman/Salesmans.vue"),
    },
    {
      path: "/stores",
      name: "stores",
      component: () => import("@/views/stores/Stores.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@/views/events/Events.vue"),
    },
    {
      path: "/routes",
      name: "routes",
      component: () => import("@/views/routes/Routes.vue"),
    },
    {
      path: "/cities",
      name: "cities",
      component: () => import("@/views/cities/Cities.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/error/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const store = useAppStore();

  if (to.meta.layout == "page") {
    store.setLayout("page");
  } else {
    store.setLayout("control");
  }

  store.setLoading(true);
});

export default router;
