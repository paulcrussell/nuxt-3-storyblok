import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'EbmVHN1eZ87mZKpqXYOwmQtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
});
