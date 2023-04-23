<script setup>
import {ref} from 'vue'
import {queryArticleListPost, articleCountPost} from '../tool/PostAPI'
import {getNowFormatDate} from '../tool/tool'
import {ElNotification} from "element-plus";

import {useGoToArticle} from "@/router/goToRouter.js";

const goToArticle = useGoToArticle();

defineProps({})


//======变量=====//

const pageSize = ref(6);
const reQueryArticleList = ref();
//传递当前页面的名称
const emit = defineEmits(['response'])
emit('response', '首页')

const nowPage = ref(1);
const totalPage = ref(1);
const articleCount = ref(0);

const handleCurrentChange = (newPage) => {
    console.log(newPage);
    //获取文章列表
    queryArticleListPost(
        newPage,
        pageSize.value,
        null,
        null,
        ((okData) => {
            reQueryArticleList.value = okData.data.articleList;
            //将页面缓慢移动到顶部
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }),
        ((errData) => {
            ElNotification({
                title: '错误',
                message: errData.message,
                type: 'error'
            });
        }));
    //将页面滚动到顶部
}

const viewArticles = (id) => {
    goToArticle(id);
}

handleCurrentChange(1);

articleCountPost(
    ((okData) => {
        articleCount.value = okData.data.count;
        totalPage.value = Math.ceil(articleCount.value / pageSize.value);
    }),
    ((errData) => {
    }));

</script>

<template>
    <div
            class="home-content"
            v-for="(item, index) in reQueryArticleList"
            v-on:click="viewArticles(item.id)">
        <h2>{{ item.title }}</h2>
        <!--        <p>{{ item.introduction }}</p>-->
        <div v-html="item.introduction" class="previewHtml"></div>
        发布者：{{ item.userName }}
        &nbsp&nbsp&nbsp&nbsp
        修改时间：{{ getNowFormatDate(item.updatedAt) }}
    </div>

    <div
            v-if="totalPage > 1"
            class="home-page">
        <el-pagination
                layout="prev, pager, next"
                :total="totalPage*10"
                @current-change="handleCurrentChange"
                v-model="nowPage"/>
    </div>

</template>

<style scoped>

.home-content {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
    padding: 40px 70px;
    cursor: pointer;

}

.home-page {
    display: flex;
    justify-content: center;
}

h2 {
    margin-top: 0;
}

</style>
