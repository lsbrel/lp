<script>
import { RouterView } from "vue-router";
import HeaderTitle from "../components/HeaderTitle.vue";

export default {
  components: {
    RouterView,
    HeaderTitle,
  },
};
</script>
<template>
  <div class="flex flex-col w-full md:w-10/12 2xl:w-11/12 overflow-y-scroll">
    <HeaderTitle :label="$route.name" />
    <RouterView v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
