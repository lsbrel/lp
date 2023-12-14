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
  <div class="flex flex-col w-full">
    <HeaderTitle :label="$route.name" />
    <RouterView v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
