<script>
import Response from "@lib/Response";
import Request from "@lib/Request";

export default {
  date() {
    return {};
  },
  methods: {
    fazerLogin() {
      const data = new Request();

      Response.toastMessage(false, `${data.resolveHost()}`);
      // this.$router.push("/dashboard");
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-4 h-full w-full">
    <div class="h-5/6 w-full bg-red-200">panel</div>
    <button class="bg-blue-400 text-white rounded-md" @click="fazerLogin()">
      Login
    </button>
  </div>
</template>
