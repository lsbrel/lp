<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <span class="mb-4 text-center capitalize cursor-pointer hover:text-kgray">{{
    $t(this.label)
  }}</span>
</template>
