<script>
export default {
  date() {
    return {};
  },
  methods: {
    fazerLogin() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-4 h-full w-full">
    <div class="h-3/4 w-full bg-red-200">panel</div>
    <button class="bg-blue-400 text-white rounded-md" @click="fazerLogin()">
      Login
    </button>
  </div>
</template>
