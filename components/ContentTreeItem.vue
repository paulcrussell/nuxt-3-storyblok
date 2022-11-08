<template>
  <div>
    <a href="{{ target }}">{{ label }}</a>
  </div>
</template>

<script setup>
const props = defineProps(['label', 'target']);
</script>
