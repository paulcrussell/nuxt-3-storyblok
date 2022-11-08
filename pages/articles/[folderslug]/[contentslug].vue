<template>
  <ContentLayout :slug="slug" />
</template>

<script setup>
const route = useRoute();
const slug = '/' + route.params.folderslug + route.params.contentslug;
</script>
