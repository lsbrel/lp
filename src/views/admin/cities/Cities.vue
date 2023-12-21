<script>
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  data() {
    return {};
  },
  components: { HeaderTitle },
};
</script>
<template>
  <HeaderTitle label="cities" />
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div class="flex flex-row h-2/6 gap-2 mb-3">
      <div class="w-2/6 bg-blue-200 rounded-md">cidade com mais rotas</div>
      <div class="w-2/6 bg-blue-300 rounded-md">cidade com mais eventos</div>
      <div class="w-2/6 bg-blue-100 rounded-md">cidade com ultimo evento</div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="flex flex-row gap-2 h-4/6 mb-3">
      <div class="h-full w-5/6 bg-red-300 rounded-md">
        Tabela/lista de cidades
      </div>
      <div class="h-full w-1/6 bg-red-200 rounded-md">
        informativos de cidades
      </div>
    </div>
    <!-- 2 -->

    <!-- 3 -->
    <div class="flex flex-row h-2/6 gap-2 mb-3">
      <div class="w-3/6 bg-yellow-100 rounded-md">estados com mais cidades</div>
      <div class="w-1/6 bg-yellow-300 rounded-md">estados com mais eventos</div>
      <div class="w-2/6 bg-yellow-200 rounded-md">estados com mais rotas</div>
    </div>
    <!-- 3 -->

    <!-- 4 -->
    <div class="flex flex-row gap-2 h-4/6 mb-3">
      <div class="h-full w-4/6 bg-orange-300 rounded-md">
        Tabela/lista de estados
      </div>
      <div class="h-full w-2/6 bg-orange-200 rounded-md">
        informativos de estados
      </div>
    </div>
    <!-- 4 -->
  </div>
</template>
