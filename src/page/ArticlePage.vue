<script setup>
import MarkdownIt from 'markdown-it';
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {queryArticlePost} from "@/tool/PostAPI.js";

defineProps({})
const emit = defineEmits(['response'])
emit('response', '文章')

const route = useRoute()
const id = ref(route.params.id)
const article = ref({})

const md = new MarkdownIt();

//获取文章
queryArticlePost(
    id.value,
    ((okData) => {
      article.value = okData.data;
    }),
    ((errData) => {
    }));

</script>

<template>
  / {{ route.params.id }}
  <div v-if="article.markdownContent==''">
    <h1>{{ article.title }}</h1>
    <div v-html="article.content"></div>
  </div>
  <div v-else>
    <h1>{{ article.title }}</h1>
    <div v-html="article.markdownContent"></div>
  </div>
</template>

<style scoped>

</style>
