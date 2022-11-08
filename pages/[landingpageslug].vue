<template>
  <LandingPageLayout :slug="slug" />
</template>

<script setup>
const route = useRoute();
const slug = '/' + route.params.landingpageslug;
</script>
