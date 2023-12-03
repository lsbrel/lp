<script setup>
import { RouterView } from "vue-router";
import Menu from "./views/menu/Menu.vue";
</script>

<template>
  <div class="grid grid-cols-6 h-screen">
    <div
      class="col-span-6 md:col-span-1 bg-stone-100 shadow-2xl border-b-2 md:border-r border-slate-300"
    >
      <Menu></Menu>
    </div>
    <div class="col-span-6 md:col-span-5 bg-zinc-100">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
