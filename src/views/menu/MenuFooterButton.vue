<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <span class="mb-4 text-center capitalize cursor-pointer">{{
    $t(this.label)
  }}</span>
</template>
