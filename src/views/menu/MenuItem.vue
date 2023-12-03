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
  <div class="p-4 capitalize text-center">
    <RouterLink :to="route">
      <span>{{ this.label }}</span>
    </RouterLink>
  </div>
</template>
