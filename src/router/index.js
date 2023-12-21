import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    /** PAGINAS */
    {
      path: "/",
      name: "home",
      component: () => import("@landing/home/Home.vue"),
      meta: { layout: "page" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@landing/login/Login.vue"),
      meta: { layout: "page" },
    },
    /** PAGINAS */

    /** DASHBOARD */
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@admin/dashboard/Dashboard.vue"),
    },
    {
      path: "/salesmans",
      name: "salesmans",
      component: () => import("@admin/salesman/Salesmans.vue"),
    },
    {
      path: "/stores",
      name: "stores",
      component: () => import("@admin/stores/Stores.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@admin/events/Events.vue"),
    },
    {
      path: "/routes",
      name: "routes",
      component: () => import("@admin/routes/Routes.vue"),
    },
    {
      path: "/cities",
      name: "cities",
      component: () => import("@admin/cities/Cities.vue"),
    },
    /** DASHBOARD */

    /** ROTAS QUE NÂO FORAM ENCOTNRADAS */
    {
      path: "/page-not-found",
      name: "pagenotfound",
      component: () => import("@error/PageNotFound.vue"),
      meta: { layout: "page" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@error/NotFound.vue"),
    },
    /** ROTAS QUE NÂO FORAM ENCOTNRADAS */
  ],
});

router.beforeEach((to, from) => {
  const store = useAppStore();

  /** ROTAS QUE NÂO EXISTEM ANTES E NÂO FAZEM PARTE DO DASHBOARD */
  if (to.name == "notfound" && from.meta.layout == "page") {
    return { name: "pagenotfound" };
  }
  /** ROTAS QUE NÂO EXISTEM ANTES E NÂO FAZEM PARTE DO DASHBOARD */

  /** TROCANDO O TIPO DE LAYOUT PARA CADA ROTA CASO NECESSARIO */
  if (to.meta.layout == "page") {
    store.setLayout("page");
  } else {
    store.setLayout("control");
    store.setLoading(true);
  }
  /** TROCANDO O TIPO DE LAYOUT PARA CADA ROTA CASO NECESSARIO */
});

export default router;
