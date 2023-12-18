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
    <div
      id="one"
      class="flex flex-row h-2/6 gap-2 mb-3 [&>*]:shadow-lg [&>*]:bg-kwhite"
    >
      <div class="w-4/12 border-1 rounded-md">total de vendas</div>
      <div class="w-2/12 border-1 rounded-md">numero de eventos ativos</div>
      <div class="w-2/12 border-1 rounded-md">numero de lojas</div>
      <div class="w-2/12 border-1 rounded-md">numero de rotas ativas</div>
      <div class="w-2/12 border-1 rounded-md">numero de vendedores ativos</div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="h-5/6 mb-3">
      <LeafletMap />
      <!-- mapa com todas as cidades e todas as rotas e todas as lojas -->
    </div>
    <!-- 2 -->

    <!-- 3 -->
    <div class="flex flex-row h-5/6 gap-2 mb-4 [&>*]:shadow-lg [&>*]:bg-kwhite">
      <div class="w-full border-1 rounded-md">
        Seletor de relatorio/lista/tabela de vendas
        <!-- Exemplo cidades/rotas/vendedores com mais vendas -->
      </div>
    </div>
    <!-- 3 -->
  </div>
</template>
<style>
#one div:hover {
  transform: scale(1.01);
  transition: all 0.2s ease-out;
}
</style>
