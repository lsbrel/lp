<script>
export default {
  props: {
    icon: String,
    label: String,
  },
};
</script>
<template>
  <div
    class="flex flex-row w-full items-center gap-2 p-4 mb-4 cursor-pointer text-primary hover:text-slate-400 font-bold"
  >
    <img :src="icon" width="24" height="24" />
    <span class="text-center capitalize">{{ $t(this.label) }}</span>
  </div>
</template>
