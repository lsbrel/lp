<script>
import { RouterView } from "vue-router";
import HeaderTitle from "@/components/HeaderTitle.vue";
import { useAppStore } from "@/stores/index.js";
import ViewLoading from "@/layouts/ViewLoading.vue";

export default {
  components: {
    RouterView,
    HeaderTitle,
    ViewLoading,
  },
  data() {
    return {
      store: useAppStore(),
    };
  },
  updated() {
    setTimeout(() => {
      this.store.setLoading(false);
    }, 1500);
  },
};
</script>
<template>
  <div
    class="flex flex-col w-full md:w-10/12 2xl:w-11/12 overflow-y-scroll bg-kwhite"
  >
    <HeaderTitle :label="$route.name" />
    <ViewLoading v-if="store.loading" />
    <RouterView v-else v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
