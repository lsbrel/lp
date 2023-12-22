<script>
import TableSalesman from "@components/tables/TableUsers.vue";
export default {
  components: {
    TableSalesman,
  },
  data() {
    return {};
  },
  computed: {
    columns() {
      return [
        {
          field: "profile.nome",
          title: this.$t("name"),
          headerClass: "capitalize",
        },
        { field: "profile.email", title: "email", headerClass: "capitalize" },
        {
          field: "telefone",
          title: this.$t("phone"),
          headerClass: "capitalize",
        },
        { field: "status", title: "status", headerClass: "capitalize" },
        {
          field: "btn",
          title: this.$t("show-more"),
          headerClass: "capitalize",
        },
      ];
    },
  },
};
</script>
<template>
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
      <div class="h-full rounded-md">
        <TableSalesman :cols="columns" api-remote="/vendedor" />
      </div>
    </div>
    <!-- 2 -->
  </div>
</template>
