<script>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";

export default {
  components: {
    Vue3Datatable,
  },
  data() {
    return {
      isLoading: true,
      rows: [
        {
          origem: "Loja Online",
          loja: "Rancho West",
          data: "20/12/2023",
          status: "3",
        },
        {
          origem: "Fernando miguel",
          loja: "Celeiro Jeans",
          data: "28/12/2023",
          status: "1",
        },
        {
          origem: "Fernando miguel",
          loja: "Celeiro Jeans",
          data: "28/12/2023",
          status: "2",
        },
      ],
    };
  },
  methods: {
    async retrieveData() {
      //so para mostrar a dinamica
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
  computed: {
    cols() {
      return [
        {
          field: "origem",
          title: this.$t("origin"),
          headerClass: "uppercase",
        },
        {
          field: "loja",
          title: this.$t("store"),
          headerClass: "uppercase",
        },
        {
          field: "data",
          title: this.$t("date"),
          headerClass: "uppercase",
        },
        {
          field: "status",
          title: "status",
          headerClass: "uppercase",
        },
        {
          field: "btn",
          title: this.$t("actions"),
          headerClass: "uppercase",
        },
      ];
    },
  },
  created() {
    this.retrieveData();
  },
};
</script>
<template>
  <div v-if="isLoading" class="mx-auto my-auto">{{ $t("loading") }}</div>
  <Vue3Datatable
    v-else
    class="p-3"
    :rows="rows"
    :columns="cols"
    :loading="isLoading"
    :totalRows="rows?.length"
  >
    <template #status="data"
      ><span
        v-if="data.value.status == 1"
        class="bg-orange-500 text-white w-full rounded-md p-2 uppercase"
        >{{ $t("purchase-received") }}</span
      >
      <span
        v-else-if="data.value.status == 2"
        class="bg-cyan-500 text-white w-full rounded-md p-2 uppercase"
      >
        {{ $t("payment-received") }}
      </span>
      <span
        v-else-if="data.value.status == 3"
        class="bg-emerald-500 text-white w-full rounded-md p-2 uppercase"
      >
        {{ $t("product-sended") }}
      </span>
    </template>
    <template #telefone="data">
      <span> {{ data.value.telefone[0].numero }}</span>
    </template>
    <template #btn="data">
      <button
        class="bg-blue-600 text-white p-2 w-1/2 uppercase rounded-md hover:bg-blue-500 transition-all text-center mx-auto"
      >
        {{ $t("show-more") }}
      </button>
    </template>
  </Vue3Datatable>
</template>
