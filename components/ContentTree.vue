<template>
  <h1>Content Tree</h1>
  <ul>
    <li v-for="story in Stories" :key="story.id">
      <ContentTreeItem :label="story.label" :target="story.slug" />
    </li>
  </ul>
</template>

<script setup>
import ContentTreeItem from './ContentTreeItem.vue';
import { useStoryblokApi, useStoryblokBridge } from '@storyblok/vue';
import { useAsyncData, useState, onMounted } from '#imports';

const story = await useAsyncStoryblok('/articles', {
  version: 'draft',
});
</script>
