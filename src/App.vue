<script setup>

import {computed, ref} from 'vue'

import Home from './page/HomePage.vue'
import NotFound from './page/NotFoundPage.vue'
import LoginPage from './page/LoginPage.vue'
import ArticlePage from './page/ArticlePage.vue'
import ManagePage from "./page/ManagePage.vue";


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

  <a href="#/">首页</a> |
  <a href="#/login">登录</a> |
  <a href="#/article">文章</a> |
  <a href="#/manage">管理</a> |
  <a href="#/non-existent-path">404</a>
  <component :is="currentView"/>

</template>

<style scoped>

</style>
