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
  <h1>{{ article.title }}</h1>
  <div
      v-if="article.markdownContent==''"
      class="article-content">
    <div
        v-html="article.content"
        class="markdown-body"></div>
  </div>
  <div v-else
       class="article-content">
    <div
        v-html="md.render(article.markdownContent??'')"
        class="markdown-body"></div>
  </div>
</template>

<style scoped>

.article-content {
  text-align: left;
  padding: 30px 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 16px;
    font-style: italic;
    color: #666;
  }

}

</style>
