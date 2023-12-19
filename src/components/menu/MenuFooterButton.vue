<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <div
    @click="() => $router.push('/exit')"
    class="flex flex-row w-full items-center gap-2 p-4 mb-4 cursor-pointer text-black hover:scale-95 transition-all font-bold"
  >
    <slot></slot>
    <span class="text-center capitalize">{{ $t(this.label) }}</span>
  </div>
</template>
