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
  <HeaderTitle label="salesmans" />
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div class="flex flex-row h-2/6 gap-2 mb-3">
      <div class="w-3/6 bg-blue-200 rounded-md">notificacoes</div>
      <div class="w-2/6 bg-blue-300 rounded-md">relatorios gerais</div>
      <div class="w-1/6 bg-blue-100 rounded-md">ultima venda</div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="h-4/6 mb-3">
      <div class="h-full bg-red-300 rounded-md">Tabela/lista de vendedores</div>
    </div>
    <!-- 2 -->
  </div>
</template>
