<template>
  <BaseLayout>
    <template #header>
      <h1>Header h1</h1>
    </template>
    <template #default>
      <div>
        <ContentTree v-if="stories" :stories="stories" />
      </div>
      <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
      </div>
    </template>
    <template #footer>
      <p>Footer details</p>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
const props = defineProps(['slug']);

const route = useRoute();
const story = await useAsyncStoryblok(props.slug, {
  version: 'draft',
});
</script>
