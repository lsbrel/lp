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
  <HeaderTitle label="stores" />
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div class="flex flex-row h-3/6 gap-2 mb-3">
      <div class="w-2/6 bg-blue-200 rounded-md">loja com mais vendas</div>
      <div class="w-2/6 bg-blue-300 rounded-md">loja com menos vendas</div>
      <div class="w-2/6 bg-blue-400 rounded-md">
        notificacao de loja/lojista
      </div>
    </div>
    <!-- 1 -->

    <!-- 2 -->
    <div class="flex flex-row gap-2 h-5/6 w-full mb-3">
      <div class="h-full w-4/6 bg-red-300 rounded-md">
        Tabela/lista de lojas
      </div>
      <div class="h-full w-2/6 bg-red-200 rounded-md">
        Informacao da loja selecionada
      </div>
    </div>
    <!-- 2 -->

    <!-- 3 -->
    <div class="h-4/6 mb-3">
      <div class="h-full bg-green-200 rounded-md">
        Tabela/lista de lojas por estado
      </div>
    </div>
    <!-- 3 -->
  </div>
</template>
