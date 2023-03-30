<script setup>
import {ref} from 'vue'
import {queryArticleListPost} from '../tool/PostAPI'
import {getNowFormatDate} from '../tool/tool'

defineProps({})


//======变量=====//

const page = ref(1);
const pageSize = ref(10);
const reQueryArticleList = ref();

//======方法=====//


//======运行=====//

//获取文章列表
queryArticleListPost(
    page.value,
    pageSize.value,
    null,
    null,
    ((okData) => {
      reQueryArticleList.value = okData.data.articleList;
    }),
    ((errData) => {
    }));

</script>

<template>
  <div
      class="home-Content"
      v-for="(item, index) in reQueryArticleList">
    <h2>{{ item.title }}</h2>
    <p>{{ item.introduction }}</p>
    发布者：{{ item.userName }}
    &nbsp&nbsp&nbsp&nbsp
    修改时间：{{ getNowFormatDate(item.updatedAt) }}
  </div>
</template>

<style scoped>

.home-Content {
  max-width: 80%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  margin: 20px auto;
  padding: 40px 70px;
}

h2 {
  margin-top: 0;
}

</style>
