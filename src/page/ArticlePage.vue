<script setup>
import MarkdownIt from 'markdown-it';
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {queryArticlePost, viewCommentPost} from "@/tool/PostAPI.js";
import Comment from "@/components/Comment.vue";
import CommentItem from "@/components/CommentItem.vue";
import {ElNotification} from "element-plus";

// 将marked 引入
import {marked} from 'marked';
// 引入markdown的css样式
import '../css/markdown-css.css';

defineProps({})
const emit = defineEmits(['response'])
emit('response', '文章')

const route = useRoute()
const id = ref(route.params.id)
const article = ref({})
const comment = ref()

const msg = ref({
    articleId: id.value,
    parentId: "",
})

//获取文章
queryArticlePost(
    id.value,
    ((okData) => {
        article.value = okData.data;
    }),
    ((errData) => {
        ElNotification({
            title: '获取文章失败',
            type: 'error',
            message: errData
        });
    }));

//获取评论
viewCommentPost(
    id.value,
    ((okData) => {
        comment.value = okData.data;
    }),
    ((errData) => {
        ElNotification({
            title: '获取评论失败',
            type: 'error',
            message: errData
        });
    }));

</script>

<template>


    <div
            v-if="article.markdownContent==''"
            class="article-content">

        <p> / {{ route.params.id }}</p>
        <p v-if="article.tags!=''">文章分类：{{ article.tags }}</p>
        <p>更新时间：{{ article.updatedAt }}</p>

        <h1>{{ article.title }}</h1>

        <div
                v-html="article.content"
                class="markdown-body"></div>
    </div>
    <div v-else
         class="article-content">

        <p> / {{ route.params.id }}</p>
        <p v-if="article.tags!=''">文章分类：{{ article.tags }}</p>
        <p>更新时间：{{ article.updatedAt }}</p>

        <h1>{{ article.title }}</h1>

        <div
                v-highlight
                v-html="marked(article.markdownContent??'')"
                class="markdown-body"></div>
    </div>

  <!--  评论显示-->
    <div v-if="comment && comment.comments">
        <div class="article-contents">
            <h2 class="article-contents-h2">评论区</h2>
            <div
                    v-for="(commentItem, index) in comment.comments"
                    :key="index"
                    class="article-contents-item">
                <CommentItem :comment="commentItem" @response="(o) => msg.parentId = o"/>
            </div>
        </div>
    </div>

  <!--  发表评论-->
    <Comment
            :msg="msg"/>

</template>

<style scoped>

p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.50);
    margin: 2px;
}

.dark p {
    color: rgba(255, 255, 255, 0.50);
}

.article-contents-h2 {
    font-size: 20px;
    margin: 2px;
}

</style>
