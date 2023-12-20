<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    sourceImage: String,
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
  components: { RouterLink },
};
</script>
<template>
  <div
    class="invisible md:visible p-4 uppercase text-center mt-3 scale-95 hover:scale-100 transition-transform"
  >
    <RouterLink to="/dashboard">
      <img :src="sourceImage" />
      <hr class="w-3/4 mx-auto mt-4 bg-primary text-primary" />
    </RouterLink>
  </div>
</template>
