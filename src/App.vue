<script setup>
import { RouterView } from "vue-router";
import Menu from "./views/menu/Menu.vue";
import TranslatorWidget from "./components/TranslatorWidget.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row w-full md:w-scren h-screen">
    <Menu></Menu>
    <TranslatorWidget />
    <router-view v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>
