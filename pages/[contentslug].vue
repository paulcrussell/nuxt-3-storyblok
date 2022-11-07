<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const route = useRoute();
const story = await useAsyncStoryblok('/' + route.params.contentslug, {
  version: 'draft',
});
</script>
