<template>
  <BaseLayout>
    <template #header>
      <h1>Header h1</h1>
    </template>
    <template #default>
      <StoryblokComponent v-if="story" :blok="story.content" />
    </template>
    <template #footer>
      <p>Footer details</p>
    </template>
  </BaseLayout>
</template>

<script setup>
const route = useRoute();
const story = await useAsyncStoryblok('/' + route.params.categoryslug, {
  version: 'draft',
});
</script>
