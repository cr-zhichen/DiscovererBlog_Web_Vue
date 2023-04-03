<script setup>
import {ref} from 'vue'
import {articleCountPost, commentCountPost} from "@/tool/PostAPI.js";
import UserManager from "@/components/UserManager.vue";
import ArticleManager from "@/components/ArticleManager.vue";
import WriteAnArticleManager from "@/components/WriteAnArticleManager.vue";
import CommentManager from "@/components/CommentManager.vue";

const emit = defineEmits(['response'])
emit('response', '管理')

//文章数量
const articleNum = ref(0);
//评论数量
const commentNum = ref(0);


articleCountPost(
    (res) => {
        articleNum.value = res.data.count;
    }, (err) => {
        console.log(err);
    });

commentCountPost(
    (res) => {
        commentNum.value = res.data.count;
    }, (err) => {
        console.log(err);
    });

const loginOut = () => {
    localStorage.clear();
    window.location.href = '/login'
}

</script>

<template>
    <el-tabs :tab-position="'left'" class="manage-tabs">
        <el-tab-pane label="用户管理">
            <UserManager/>
        </el-tab-pane>
        <el-tab-pane label="撰写文章">
            <WriteAnArticleManager/>
        </el-tab-pane>
        <el-tab-pane label="文章管理">
            <ArticleManager/>
        </el-tab-pane>
        <el-tab-pane label="评论管理">
            <CommentManager/>
        </el-tab-pane>
        <el-tab-pane label="退出登录">
            <h1>退出登录</h1>
            <el-button type="danger" @click="loginOut">退出登录</el-button>
        </el-tab-pane>
    </el-tabs>

</template>

<style scoped>

.manage-tabs-input {
    width: 50%;
}

</style>