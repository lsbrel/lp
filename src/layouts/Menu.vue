<script>
import MenuItem from "@components/menu/MenuItem.vue";
import MenuTitle from "@components/menu/MenuTitle.vue";
import MenuFooterButton from "@components/menu/MenuFooterButton.vue";
import Logo from "@icons/logo_sem_fundo.png";
import Exit from "@icons/menu/Exit.vue";
import Salesman from "@icons/menu/Salesman.vue";
import Events from "@icons/menu/Events.vue";
import Routes from "@icons/menu/Routes.vue";
import Stores from "@icons/menu/Stores.vue";
import Cities from "@icons/menu/Cities.vue";

export default {
  data() {
    return {
      images: {
        logo: Logo,
        icons: {
          exit: Exit,
        },
      },
    };
  },
  components: {
    MenuItem,
    MenuTitle,
    MenuFooterButton,
    Cities,
    Stores,
    Routes,
    Events,
    Salesman,
    Exit,
  },
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
        <MenuItem label="salesmans" route="salesmans">
          <Salesman />
        </MenuItem>
        <MenuItem label="stores" route="stores">
          <Stores />
        </MenuItem>
        <MenuItem label="events" route="events">
          <Events />
        </MenuItem>
        <MenuItem label="routes" route="routes">
          <Routes />
        </MenuItem>
        <MenuItem label="cities" route="cities">
          <Cities />
        </MenuItem>
      </div>
      <div class="flex flex-col w-full h-full justify-end">
        <MenuFooterButton label="exit">
          <Exit />
        </MenuFooterButton>
      </div>
    </div>
  </div>
</template>
