<script setup>
import {ref} from 'vue'

const emit = defineEmits(['response'])
emit('response', '管理')
</script>

<template>
  <h1>ManagePage</h1>
</template>

<style scoped>

</style>