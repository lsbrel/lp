<script>
export default {
  props: {
    icon: String,
    label: String,
  },
};
</script>
<template>
  <div class="flex flex-row w-full gap-2 p-4 mb-4 cursor-pointer hover:text-kgray">
    <img :src="icon" width="32" height="32" />
    <span class="text-center capitalize">{{ $t(this.label) }}</span>
  </div>
</template>
