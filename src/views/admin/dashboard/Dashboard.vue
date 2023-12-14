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
  <div class="w-full md:w-10/12 2xl:w-11/12 h-full bg-kwhite p-5">
    <span>Dashboard</span>
    <div class="w-full h-5/6">
      <LeafletMap />
    </div>
  </div>
</template>
