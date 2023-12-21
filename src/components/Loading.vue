<script>
import loading from "@icons/loading.svg";
export default {
  data() {
    return {
      loading: loading,
    };
  },
};
</script>
<template>
  <span class="flex flex-row justify-center items-center align-center"
    ><img class="animate-spin-slow" width="48" height="48" :src="loading"
  /></span>
</template>
