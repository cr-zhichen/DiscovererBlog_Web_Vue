<script setup>
import {ref} from 'vue'

const emit = defineEmits(['response'])
emit('response', '登录')
</script>

<template>
  <h1>LoginPage</h1>
</template>

<style scoped>

</style>