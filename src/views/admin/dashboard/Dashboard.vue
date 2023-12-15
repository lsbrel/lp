<script>
import LeafletMap from "@/components/LeafletMap.vue";

export default {
  components: {
    LeafletMap,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<template>
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div class="flex flex-row h-2/6 gap-2 mb-3">
      <div class="w-1/4 bg-blue-200 rounded-md">item</div>
      <div class="w-3/4 bg-blue-300 rounded-md">item2</div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="h-5/6 mb-3">
      <LeafletMap />
    </div>
    <!-- 2 -->

    <!-- 3 -->
    <div class="flex flex-row h-3/6 gap-2 mb-4">
      <div class="w-full bg-blue-200 rounded-md">item3</div>
    </div>
    <!-- 3 -->
  </div>
</template>
