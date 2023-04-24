<script setup>
import {ref} from 'vue'
import {queryArticleListPost, articleCountPost, getAllTagsPost} from '../tool/PostAPI'
import {getNowFormatDate} from '../tool/tool'
import {ElNotification} from "element-plus";

import {useGoToArticle} from "@/router/goToRouter.js";
import {Search} from "@element-plus/icons-vue";

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

const keyWord = ref(null);
const tag = ref(null);
const options = ref([])

getAllTagsPost(
    ((okData) => {
        options.value = okData.data.tags.map((item, index) => {
            return {
                value: item,
                label: item
            }
        })
    }),
    ((errData) => {
        ElNotification({
            title: '获取标签失败',
            message: errData,
            type: 'error'
        });
    }));

const handleCurrentChange = (newPage) => {
    //获取文章列表
    queryArticleListPost(
        newPage,
        pageSize.value,
        tag.value,
        keyWord.value,
        ((okData) => {
            reQueryArticleList.value = okData.data.articleList;
            articleCount.value = okData.data.total;
            totalPage.value = Math.ceil(articleCount.value / pageSize.value);
            //将页面缓慢移动到顶部
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }),
        ((errData) => {
            ElNotification({
                title: '错误',
                message: errData,
                type: 'error'
            });
        }));
    //将页面滚动到顶部
}

const viewArticles = (id) => {
    goToArticle(id);
}

handleCurrentChange(1);

</script>

<template>

    <div class="home-page-select-div">
        <el-select-v2
                v-model="tag"
                :options="options"
                placeholder="请选择标签"
                style="min-width: 115px"
                clearable
                @change="handleCurrentChange(1)"
        />

        <el-input
                v-model="keyWord"
                placeholder="请输入要搜索的文章"
                class="input-with-select"
                @keyup.enter.native="handleCurrentChange(1)"
                @input="handleCurrentChange(1)"
                clearable
        >
            <template #append>
                <el-button
                        icon="Search"
                        @click="handleCurrentChange(1)"
                ></el-button>
            </template>
        </el-input>
    </div>

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

h2 {
    margin-top: 0;
}

.home-page-select-div {
    display: flex;
    align-items: center;
}

.input-with-select {
    margin-left: 10px;
}


</style>
