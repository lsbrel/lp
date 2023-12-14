<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <div class="p-4 mt-4">
    <h1>{{ $t(label) }}</h1>
  </div>
</template>
