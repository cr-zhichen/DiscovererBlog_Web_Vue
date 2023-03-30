<script setup>
import {ref, watch} from 'vue'

const radio = ref('首页')

//监听radio的变化
watch(radio, async (newQuestion, oldQuestion) => {
  switch (newQuestion) {
    case '首页':
      window.location.href = '#/'
      break
    case '文章':
      window.location.href = '#/article'
      break
    case '登录':
      window.location.href = '#/login'
      break
    case '管理':
      window.location.href = '#/manage'
      break
  }
})

defineProps({})
</script>

<template>

  <el-radio-group
      v-model="radio"
      size="large">
    <el-radio-button label="首页"/>
    <el-radio-button label="文章"/>
    <el-radio-button label="登录"/>
    <el-radio-button label="管理"/>
  </el-radio-group>

</template>

<style scoped>


</style>