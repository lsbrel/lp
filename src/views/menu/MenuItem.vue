<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    label: String,
    route: String,
  },
  components: { RouterLink },
};
</script>
<template>
  <div class="p-4 capitalize text-center hover:text-kgray w-full">
    <RouterLink :to="route">
      <span>{{ $t(label) }}</span>
    </RouterLink>
  </div>
</template>
