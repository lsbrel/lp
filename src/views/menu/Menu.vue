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
        <MenuItem
          icon="https://as2.ftcdn.net/v2/jpg/02/70/02/13/1000_F_270021346_5wD4YOd40LHVPEDf28OdDeDcMExRPSML.jpg"
          label="salesmans"
          route="/salesman"
        />
        <MenuItem
          icon="https://as2.ftcdn.net/v2/jpg/02/70/02/13/1000_F_270021346_5wD4YOd40LHVPEDf28OdDeDcMExRPSML.jpg"
          label="stores"
          route="/stores"
        />
        <MenuItem
          icon="https://as2.ftcdn.net/v2/jpg/02/70/02/13/1000_F_270021346_5wD4YOd40LHVPEDf28OdDeDcMExRPSML.jpg"
          label="events"
          route="/events"
        />
        <MenuItem
          icon="https://as2.ftcdn.net/v2/jpg/02/70/02/13/1000_F_270021346_5wD4YOd40LHVPEDf28OdDeDcMExRPSML.jpg"
          label="routes"
          route="/routes"
        />
        <MenuItem
          icon="https://as2.ftcdn.net/v2/jpg/02/70/02/13/1000_F_270021346_5wD4YOd40LHVPEDf28OdDeDcMExRPSML.jpg"
          label="cities"
          route="/cities"
        />
      </div>
      <div class="flex flex-col w-full h-full justify-end">
        <MenuFooterButton
          icon="https://as2.ftcdn.net/v2/jpg/02/70/02/13/1000_F_270021346_5wD4YOd40LHVPEDf28OdDeDcMExRPSML.jpg"
          label="exit"
        />
      </div>
    </div>
  </div>
</template>
