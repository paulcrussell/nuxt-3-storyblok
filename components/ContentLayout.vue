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
import BaseLayout from './BaseLayout.vue';

const route = useRoute();
const story = await useAsyncStoryblok('/' + route.params.contentslug, {
  version: 'draft',
});
</script>
