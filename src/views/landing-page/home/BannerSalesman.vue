<script setup>
import SalesmanCard from '@components/home/SalesmanCard.vue';
</script>
<template>
  <section class="pt-20 pb-48">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-black capitalize">{{ $t('salesmans') }}</h2>
          <p class="text-lg leading-relaxed m-4 text-black">
            {{ $t('know-salesman') }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <SalesmanCard name="Fernando Macedo" region="Mato Grosso" photo="" />
        <SalesmanCard name="Diego Alves" region="Mato Grosso do Sul e Paraná" photo="" />
        <SalesmanCard name="Thiago Santos" region="Mato Grosso do Sul" photo="" />
        <SalesmanCard name="Marcos Macedo" region="São Paulo" photo="" />
      </div>
    </div>
  </section>
</template>
