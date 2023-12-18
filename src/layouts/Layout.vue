<script>
import { RouterView } from "vue-router";
import HeaderTitle from "../components/HeaderTitle.vue";
import { useAppStore } from "../stores/index.js";
import loading from "@/icons/loading.svg";

export default {
  components: {
    RouterView,
    HeaderTitle,
  },
  data() {
    return {
      store: useAppStore(),
      loading: loading,
    };
  },
  updated() {
    setTimeout(() => {
      this.store.setLoading(false);
    }, 2000);
  },
};
</script>
<template>
  <div class="flex flex-col w-full md:w-10/12 2xl:w-11/12 overflow-y-scroll">
    <HeaderTitle :label="$route.name" />
    <div v-if="store.loading">
      <span class="flex flex-row justify-center items-center align-center"
        ><img class="animate-spin-slow" width="48" height="48" :src="loading"
      /></span>
    </div>
    <RouterView v-else v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
