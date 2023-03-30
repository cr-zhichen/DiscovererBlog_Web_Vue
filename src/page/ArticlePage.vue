<script setup>
import {getCurrentInstance, ref} from 'vue'

defineProps({})
const emit = defineEmits(['response'])
emit('response', '文章')

</script>

<template>
  <h1>ArticlePage</h1>
</template>

<style scoped>

</style>
