<script setup>

import {ref, computed} from 'vue'

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

</script>

<template>

  <a href="#/">Home</a> |
  <a href="#/login">Login</a> |
  <a href="#/article">Article</a> |
  <a href="#/manage">Manage</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView"/>

</template>

<style scoped>

</style>
