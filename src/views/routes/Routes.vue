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
  <HeaderTitle label="routes" />
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div class="flex flex-row h-2/6 gap-2 mb-3">
      <div class="w-2/6 bg-blue-200 rounded-md">cidade com mais rotas</div>
      <div class="w-2/6 bg-blue-300 rounded-md">ultima rota adicionada</div>
      <div class="w-1/6 bg-blue-100 rounded-md">numero de rotas ativas</div>
      <div class="w-1/6 bg-blue-50 rounded-md">numero de rotas inativas</div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="flex flex-row gap-2 h-4/6 mb-3">
      <div class="h-full w-4/6 bg-red-300 rounded-md">
        Tabela/lista de rotas
      </div>
      <div class="h-full w-2/6 bg-red-200 rounded-md">
        informativos de rotas
      </div>
    </div>
    <!-- 2 -->
  </div>
</template>
