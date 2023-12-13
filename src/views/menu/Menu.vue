<script>
import MenuItem from "./MenuItem.vue";
import MenuTitle from "./MenuTitle.vue";
import MenuFooterButton from "./MenuFooterButton.vue";

export default {
  data() {
    return {};
  },
  components: { MenuItem, MenuTitle, MenuFooterButton },
};
</script>
<template>
  <div
    class="w-full md:w-1/12 shadow-xl bg-primary-light text-kwhite"
    style="z-index: 1000 !important"
  >
    <div class="flex flex-row md:flex-col sm:h-1/4 md:h-full w-full shadow-2xl">
      <div class="w-screen md:w-full md:h-1/7">
        <MenuTitle
          source-image="https://lh3.googleusercontent.com/p/AF1QipMrbkI-94GMJPMxjNzbbuIOpHg6JqcYs_A3FnGl=s680-w680-h510"
        />
      </div>
      <div
        class="flex flex-row md:flex-col items-center md:h-5/7 lg:h-5/7 gap-1"
      >
        <MenuItem icon="https://e7.pngegg.com/pngimages/726/636/png-clipart-computer-icons-icon-design-share-icon-shape-icon-shapes-artwork.png" label="salesmans" route="/salesman" />
        <MenuItem label="stores" route="/stores" />
        <MenuItem label="events" route="/events" />
        <MenuItem label="routes" route="/routes" />
        <MenuItem label="cities" route="/cities" />
      </div>
      <div class="flex flex-col w-full h-full justify-end">
        <MenuFooterButton label="exit" />
      </div>
    </div>
  </div>
</template>
