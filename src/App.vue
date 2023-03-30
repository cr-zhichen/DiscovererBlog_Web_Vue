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

</style>
