<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <div class="p-3 mt-4 text-black">
    <h1 class="text-2xl">{{ $t(label) ?? "404" }}</h1>
  </div>
</template>
