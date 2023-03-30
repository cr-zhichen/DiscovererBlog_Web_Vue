<script setup>

import {computed, ref} from 'vue'

import Routes from "./components/Routes.vue";

//======变量=====//

const childMsg = ref();

//======方法=====//

</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header class="app-header">
        <Routes :msg="childMsg"/>
      </el-header>

      <el-main>
        <router-view @response="(msg) => childMsg = msg"/>
      </el-main>
    </el-container>
  </div>


</template>

<style scoped>

.app-header {
  display: flex;
  justify-content: center;
}

.common-layout {
  max-width: 80%;
  margin: 0 auto;
}

/* 根据设备宽度进行自适应 */
@media screen and (max-width: 768px) {
  .common-layout {
    max-width: 95%; /* 调整为适合移动设备的宽度 */
  }
}


</style>
