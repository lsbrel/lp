<script setup>
import Menu from "@/layouts/Menu.vue";
import FloatingWidget from "@/components/helpers/FloatingWidget.vue";
import Layout from "@/layouts/Layout.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row w-full md:w-scren h-screen">
    <Menu></Menu>
    <FloatingWidget />
    <Layout />
  </div>
</template>
