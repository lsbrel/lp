<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <div class="p-4 mt-4">
    <h1 class="text-2xl">{{ $t(label) ?? "404" }}</h1>
  </div>
</template>
