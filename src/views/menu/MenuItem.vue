<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    icon: String,
    label: String,
    route: String,
  },
  components: { RouterLink },
};
</script>
<template>
  <div
    class="flex flex-row items-center gap-2 p-4 text-lg capitalize text-center hover:text-kgray w-full"
  >
    <img :src="icon" width="32" height="32" />
    <RouterLink :to="route">
      <span>{{ $t(label) }}</span>
    </RouterLink>
  </div>
</template>
