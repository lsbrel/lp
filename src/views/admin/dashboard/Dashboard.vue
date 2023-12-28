<script>
import LeafletMap from "@/components/LeafletMap.vue";
import totalData from "@components/dashboard/totalData.vue";
import RelatorioVendas from "./_RelatorioVendas.vue";

export default {
  components: {
    LeafletMap,
    totalData,
    RelatorioVendas,
  },
  data() {
    return {
      dashboardData: {
        totalVendas: 0,
        totalEvents: 0,
        totalStores: 0,
        totalSellers: 0,
        totalRoutes: 0,
      },
    };
  },
  methods: {
    async getDashboardData() {
      this.dashboardData = {
        totalVendas: 1088,
        totalEvents: 10,
        totalStores: 122,
        totalSellers: 5,
        totalRoutes: 6,
      };
    },
  },
  created() {
    // So para mostrar a dinamica
    setTimeout(() => {
      this.getDashboardData();
    }, 2000);
  },
};
</script>
<template>
  <div class="w-full h-full bg-kwhite p-5 mt-0">
    <!-- 1 -->
    <div
      id="one"
      class="flex flex-row h-2/6 gap-2 mb-3 [&>*]:shadow-lg [&>*]:bg-kwhite"
    >
      <div class="w-4/12 border-1 rounded-md p-2">
        <totalData
          title="total-sell"
          :data="[dashboardData.totalVendas]"
          color="#4361ee"
        />
      </div>
      <div class="w-2/12 border-1 rounded-md">
        <totalData
          title="total-active-events"
          :data="[dashboardData.totalEvents]"
          color="#ff0000"
        />
      </div>
      <div class="w-2/12 border-1 rounded-md">
        <totalData
          title="total-stores"
          :data="[dashboardData.totalStores]"
          color="#00ab55"
        />
      </div>
      <div class="w-2/12 border-1 rounded-md">
        <totalData
          title="total-active-routes"
          :data="[dashboardData.totalRoutes]"
          color="#4361ee"
        />
      </div>
      <div class="w-2/12 border-1 rounded-md">
        <totalData
          title="total-active-salesman"
          :data="[dashboardData.totalSellers]"
          color="#4361ee"
        />
      </div>
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
      <div id="vendas" class="w-full border-1 rounded-md">
        <RelatorioVendas />
      </div>
    </div>
    <!-- 3 -->
  </div>
</template>
