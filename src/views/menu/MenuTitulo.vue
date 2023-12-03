<script>
export default {
  props: {
    label: String,
  },
  methods:{
    reloadPage(){
        window.location.reload()    
    }
  }
};
</script>
<template>
  <div class="p-4 uppercase text-center mt-3">
    <span class="cursor-pointer" @click="reloadPage()">{{ this.label }}</span>
    <hr class="w-3/4 mx-auto mt-4">
  </div>
</template>
