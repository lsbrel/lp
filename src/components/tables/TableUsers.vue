<script>
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import { useAppStore } from "@/stores";
import Response from "@lib/Response.js";

export default {
  components: {
    Vue3Datatable,
  },
  props: {
    cols: Array,
    apiRemote: String,
  },
  data() {
    return {
      request: useAppStore().getApi,
      isLoading: true,
      isFailed: false,
      rows: [],
    };
  },
  methods: {
    async retrieveApiData() {
      await this.request
        .index(`${this.apiRemote}`)
        .then((res) => {
          if (!res.data.status) {
            Response.toastMessage(res.status, res.messageCode);
            this.isFailed = true;
          } else {
            this.rows = res.data.content;
          }
        })
        .finally(() => (this.isLoading = false));
    },

    showMore(id) {
      this.$router.push(`/profile/${id}`);
    },
  },
  created() {
    this.retrieveApiData();
  },
};
</script>
<template>
  <div v-if="isFailed">Buscar dados falhou</div>
  <Vue3Datatable
    v-else
    :rows="rows"
    :columns="cols"
    :loading="isLoading"
    :totalRows="rows?.length"
  >
    <template #status="data"
      ><span
        v-if="data.value.vendedor.ativo == 1"
        class="bg-emerald-500 text-white w-full rounded-md p-2"
        >{{ $t("active") }}</span
      >
      <span v-else class="bg-red-500 text-white w-full rounded-md p-2">
        {{ $t("inactive") }}
      </span>
    </template>
    <template #telefone="data">
      <span> {{ data.value.telefone[0].numero }}</span>
    </template>
    <template #documento="data">
      <span> {{ data.value.documento[0].numero }}</span>
    </template>
    <template #btn="data">
      <button
        class="bg-blue-600 text-white p-2 w-1/2 uppercase rounded-md hover:bg-blue-500 transition-all text-center mx-auto"
        @click="showMore(data.value.vendedor.id)"
      >
        {{ $t("show-more") }}
      </button>
    </template>
  </Vue3Datatable>
</template>
