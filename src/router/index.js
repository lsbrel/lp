import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    /** PAGINAS */
    {
      path: "/",
      name: "home",
      component: () => import("@landing/home/Index.vue"),
      meta: { layout: "page" },
    },
    /** PAGINAS */

    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "notfound",
    //   component: () => import("@error/NotFound.vue"),
    // },
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
