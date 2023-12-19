<script setup>
import loading from "@/icons/loading.svg";
</script>
<template>
  <div class="flex flex-col justify-center w-full h-full">
    <span class="flex flex-row justify-center items-center align-center"
      ><img class="animate-spin-slow" width="48" height="48" :src="loading"
    /></span>
  </div>
</template>
