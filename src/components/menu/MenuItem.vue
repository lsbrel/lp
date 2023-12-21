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
  <RouterLink :to="route">
    <div
      class="flex flex-row items-center gap-2 p-4 text-lg capitalize text-center text-black hover:scale-95 transition-all w-full cursor-pointer"
    >
      <slot></slot>
      <span>{{ $t(label) }}</span>
    </div>
  </RouterLink>
</template>
