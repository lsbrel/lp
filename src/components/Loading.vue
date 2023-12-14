<script>
import loading from "@/icons/loading.png";
export default {
  data() {
    return {
      loading: loading,
    };
  },
};
</script>
<template>
  <span class="flex flex-row justify-center align-center bg-blue-"
    ><img class="animate-spin" :src="icon"
  /></span>
</template>
