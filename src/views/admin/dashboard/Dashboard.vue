<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeLang() {
      localStorage.setItem("lang", "pt");
      console.log(localStorage.getItem("lang"));
    },
  },
};
</script>
<template>
  <div class="w-full md:w-11/12 h-full" style="background-color: #fafafa">
    <div class="r">
      <div class="col-12">{{ $t("credentialsError") }}</div>
      <button
        @click="changeLang"
        class="bg-blue-400 shadow-lg p-2 rounded hover:bg-blue-300"
      >
        Mudar linguagem
      </button>
    </div>
  </div>
</template>
