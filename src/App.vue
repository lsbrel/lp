<script setup>
import Menu from "@/layouts/Menu.vue";
import FloatingWidget from "@/components/helpers/FloatingWidget.vue";
import Layout from "@/layouts/Layout.vue";
import { useAppStore } from "@/stores";
const store = useAppStore();
</script>

<template>
  <div class="flex flex-col md:flex-row w-full md:w-scren h-screen">
    <Menu v-if="store.getLayout == 'control'"></Menu>
    <FloatingWidget v-if="store.getLayout == 'control'" />
    <Layout />
  </div>
</template>
