<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div class="flex flex-row h-2/6 gap-2 mb-3">
      <div class="w-1/6 bg-blue-200 rounded-md">ultimo evento</div>
      <div class="w-4/6 bg-blue-300 rounded-md">
        numero/lista de eventos ativos
      </div>
      <div class="w-1/6 bg-blue-100 rounded-md">
        estado com mais eventos ativos
      </div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="flex flex-row gap-2 h-4/6 mb-3">
      <div class="h-full w-5/6 bg-red-300 rounded-md">
        Tabela/lista de eventos
      </div>
      <div class="h-full w-1/6 bg-red-200 rounded-md">
        informacoes do evento selecionado
      </div>
    </div>
    <!-- 2 -->
  </div>
</template>
