<template>
  <ProductLayout />
</template>

<script setup>
const route = useRoute();
const slug = '/' + route.params.productslug;
</script>
