<script setup>
import {ref} from 'vue'
import {queryArticleListPost, articleCountPost, getAllTagsPost} from '../tool/PostAPI'
import {getNowFormatDate} from '../tool/tool'
import {ElNotification} from "element-plus";

defineProps({})


//======变量=====//

const pageSize = ref(999999999);
const reQueryArticleList = ref();
//传递当前页面的名称
const emit = defineEmits(['response'])
emit('response', '搜索')
const keyWord = ref(null);

const tags = ref([])
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

    //将tags转换为字符串
    let strValue = '';
    if (tags.value.length > 0) {
        strValue = tags.value.join(',')
    }

    console.log(tags);

    //获取文章列表
    queryArticleListPost(
        newPage,
        pageSize.value,
        strValue,
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
            ElNotification({
                title: '获取文章列表失败',
                message: errData.message,
                type: 'error'
            });
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

    <p>
        <el-select-v2
                v-model="tags"
                filterable
                :options="options"
                placeholder="请选择标签"
                style="width: 100%"
                multiple
                clearable
                @change="handleCurrentChange(1)"
        />
    </p>


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
