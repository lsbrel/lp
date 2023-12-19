<script setup>
import TranslatorWidget from "./TranslatorWidget.vue";
import ThemeWidget from "./ThemeWidget.vue";
</script>
<template>
  <div class="absolute top-0 right-0 mt-4 mr-4" style="z-index: 1000">
    <div class="flex flex-row gap-6 items-center">
      <ThemeWidget />
      <TranslatorWidget />
    </div>
  </div>
</template>
