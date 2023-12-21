<script setup>
import Card from "@components/home/Card.vue"
import CardSection from "@components/home/CardSection.vue"
</script>
<template>
  <section class="pb-20 bg-gray-200 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <Card :title="$t('title-card-one')" :text="$t('text-card-one')" color="bg-red-400" />
        </div>
        <div class="w-full md:w-4/12 px-4 text-center">
          <Card :title="$t('title-card-two')" :text="$t('text-card-two')" color="bg-green-400" />
        </div>
        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <Card :title="$t('title-card-three')" :text="$t('text-card-three')" color="bg-blue-400" />
        </div>
      </div>
      <CardSection />
    </div>
  </section>
</template>
