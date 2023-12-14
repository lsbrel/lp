<script>
import MenuItem from "./MenuItem.vue";
import MenuTitle from "./MenuTitle.vue";
import MenuFooterButton from "./MenuFooterButton.vue";
import Logo from "@/icons/logo_sem_fundo.png";
import Exit from "@/icons/menu/exit.svg";
import Salesmans from "@/icons/menu/salesman.svg";
import Events from "@/icons/menu/events.svg";
import Cities from "@/icons/menu/cities.svg";
import Routes from "@/icons/menu/routes.svg";
import Stores from "@/icons/menu/stores.svg";

export default {
  data() {
    return {
      images: {
        logo: Logo,
        icons: {
          exit: Exit,
          salesmans: Salesmans,
          events: Events,
          cities: Cities,
          routes: Routes,
          stores: Stores,
        },
      },
    };
  },
  components: { MenuItem, MenuTitle, MenuFooterButton },
};
</script>
<template>
  <div
    class="w-full md:w-2/12 2xl:w-1/12 shadow-3xl bg-kwhite"
    style="z-index: 1000 !important"
  >
    <div class="flex flex-row md:flex-col sm:h-1/4 md:h-full w-full shadow-2xl">
      <div class="w-screen md:w-full md:h-1/7">
        <MenuTitle :source-image="images.logo" />
      </div>
      <div
        class="flex flex-row md:flex-col items-center md:h-5/7 lg:h-5/7 gap-1"
      >
        <MenuItem
          :icon="images.icons.salesmans"
          label="salesmans"
          route="salesmans"
        />
        <MenuItem :icon="images.icons.stores" label="stores" route="stores" />
        <MenuItem :icon="images.icons.events" label="events" route="events" />
        <MenuItem :icon="images.icons.routes" label="routes" route="routes" />
        <MenuItem :icon="images.icons.cities" label="cities" route="cities" />
      </div>
      <div class="flex flex-col w-full h-full justify-end">
        <MenuFooterButton :icon="images.icons.exit" label="exit" />
      </div>
    </div>
  </div>
</template>
