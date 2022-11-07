<template></template>

<script setup>
const route = useRoute();
const story = await useAsyncStoryblok('/' + route.params.contentslug, {
  version: 'draft',
});
</script>
