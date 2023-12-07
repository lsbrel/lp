<script>
import MenuItem from "./MenuItem.vue";
import MenuTitulo from "./MenuTitulo.vue";

export default {
  data() {
    return {};
  },
  components: { MenuItem, MenuTitulo },
};
</script>
<template>
  <div
    class="w-full md:w-1/12 shadow-xl"
    style="z-index: 1000 !important; background-color: #ffffff"
  >
    <div class="flex flex-row md:flex-col sm:h-1/4 md:h-full w-full shadow-lg">
      <div class="w-screen md:w-full md:h-1/7">
        <MenuTitulo label="kentanna tx" />
      </div>
      <div
        class="flex flex-row md:flex-col items-center md:h-5/7 lg:h-5/7 gap-2"
      >
        <MenuItem label="vendedores" route="/vendedores" />
        <MenuItem label="loja" route="/loja" />
        <MenuItem label="eventos" route="/eventos" />
        <MenuItem label="rotas" route="/rotas" />
        <MenuItem label="cidades" route="/cidades" />
      </div>
    </div>
  </div>
</template>
