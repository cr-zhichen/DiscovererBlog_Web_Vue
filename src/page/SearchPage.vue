<script setup>
import {ref} from 'vue'
import {queryArticleListPost, articleCountPost} from '../tool/PostAPI'
import {getNowFormatDate} from '../tool/tool'
import {ElNotification} from "element-plus";

defineProps({})


//======变量=====//

const pageSize = ref(999999999);
const reQueryArticleList = ref();
//传递当前页面的名称
const emit = defineEmits(['response'])
emit('response', '搜索')

const nowPage = ref(1);
const totalPage = ref(1);
const articleCount = ref(0);

const keyWord = ref(null);

const handleCurrentChange = (newPage) => {

    if (keyWord.value == null || keyWord.value == "") {
        ElNotification({
            title: '错误',
            message: '请输入关键字',
            type: 'error'
        });
        return;
    }

    console.log(newPage);
    //获取文章列表
    queryArticleListPost(
        newPage,
        pageSize.value,
        null,
        keyWord.value,
        ((okData) => {
            reQueryArticleList.value = okData.data.articleList;
            //将页面缓慢移动到顶部
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }),
        ((errData) => {
        }));
    //将页面滚动到顶部
}

const viewArticles = (id) => {
    window.location.href = '/article/' + id;
}

</script>

<template>

  <!--    搜索框-->
    <el-input
            v-model="keyWord"
            placeholder="请在此搜索"
            @keyup.enter.native="handleCurrentChange(1)"
    />

    <div
            class="home-content"
            v-for="(item, index) in reQueryArticleList"
            v-on:click="viewArticles(item.id)">
        <h2>{{ item.title }}</h2>
        <!--        <p>{{ item.introduction }}</p>-->
        <div v-html="item.introduction"></div>
        发布者：{{ item.userName }}
        &nbsp&nbsp&nbsp&nbsp
        修改时间：{{ getNowFormatDate(item.updatedAt) }}
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
