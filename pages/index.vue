<template>
  <LandingPageLayout :slug="slug" />
</template>

<script setup>
const route = useRoute();
const slug = '/landing';
</script>
