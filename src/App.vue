<script setup>
import { RouterView } from "vue-router";
import Menu from "./views/menu/Menu.vue";
import TranslatorWidget from "./components/TranslatorWidget.vue";
import Layout from "./layouts/Layout.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row w-full md:w-scren h-screen">
    <Menu></Menu>
    <TranslatorWidget />
    <Layout />
  </div>
</template>
