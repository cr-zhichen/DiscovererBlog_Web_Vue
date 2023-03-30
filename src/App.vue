<script setup>

import {computed, ref} from 'vue'

import Home from './page/HomePage.vue'
import NotFound from './page/NotFoundPage.vue'
import LoginPage from './page/LoginPage.vue'
import ArticlePage from './page/ArticlePage.vue'
import ManagePage from "./page/ManagePage.vue";
import Routes from "./components/Routes.vue";


//======路由=====//
const routes = {
  '/': Home,
  '/login': LoginPage,
  '/article': ArticlePage,
  '/manage': ManagePage,
}
const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

//======变量=====//


//======方法=====//

</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header class="app-header">
        <Routes/>
      </el-header>

      <el-main>
        <component :is="currentView"/>
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
