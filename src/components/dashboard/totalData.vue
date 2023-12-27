<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  props: {
    title: String,
    data: Array,
    color: String,
  },
  components: {
    VueApexCharts,
  },
  created() {
    console.log(this.data);
  },
  computed: {
    titleComputed() {
      return this.$t(this.title);
    },
    options() {
      return {
        chart: {
          type: "donut",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        labels: ["Total Downloads"],
        colors: [this.color],
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
        stroke: {
          show: true,
          width: 15,
        },
        legend: {
          position: "bottom",
        },
        labels: [this.titleComputed],
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
              background: "transparent",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "29px",
                  offsetY: -10,
                },
                value: {
                  show: true,
                  fontSize: "26px",
                  color: "#000",
                  offsetY: 16,
                  formatter: (val) => {
                    return val;
                  },
                },
                total: {
                  show: true,
                  label: "Total",
                  color: "#000",
                  fontSize: "29px",
                  formatter: (w) => {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
      };
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-1 bg-kwhite">
    <h1 class="text-xl tracking-wide capitalize p-3 mb-0 text-black">
      {{ titleComputed }}
    </h1>
    <hr class="w-3/4 ml-1" />
    <div class="lowercase text-center items-center" v-if="data[0] == 0">
      {{ $t("loading") }}
    </div>
    <div class="mx-auto" v-else>
      <VueApexCharts
        :options="options"
        :series="data"
        class="bg-kwhite rounded-lg overflow-hidden"
      ></VueApexCharts>
    </div>
  </div>
</template>
