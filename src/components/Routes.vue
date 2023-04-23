<script setup>
import {ref, watch} from 'vue'
import {getToken} from "@/tool/tool.js";

const props = defineProps({
    msg: String
})

const radio = ref("")

import {useGoToArticle, useGoToHome, useGoToLogin, useGoToManage, useGoToSearch} from "@/router/goToRouter.js";
const goToHome = useGoToHome();
const goToSearch = useGoToSearch();
const goToArticle = useGoToArticle();
const goToLogin = useGoToLogin();
const goToManage = useGoToManage();

//监听radio的变化
watch(radio, async (newQuestion, oldQuestion) => {
    switch (newQuestion) {
        case '首页':
            if (props.msg === '首页') {
                return
            }
            goToHome()
            break
        case '搜索':
            if (props.msg === '搜索') {
                return
            }
            goToSearch()
            break
        case '文章':
            if (props.msg === '文章') {
                return
            }
            goToArticle()
            break
        case '登录':
            if (props.msg === '登录') {
                return
            }
            goToLogin()
            break
        case '管理':
            if (props.msg === '管理') {
                return
            }
            goToManage()
            break
    }
})
//监听props的变化
watch(props, async (newQuestion, oldQuestion) => {
    switch (newQuestion.msg) {
        case '首页':
            radio.value = '首页'
            break
        case '搜索':
            radio.value = '搜索'
            break
        case '文章':
            radio.value = '文章'
            break
        case '登录':
            radio.value = '登录'
            break
        case '管理':
            radio.value = '管理'
            break
    }
})
</script>


<template>

    <el-radio-group
            v-model="radio"
            size="large">
        <el-radio-button label="首页"/>
        <el-radio-button label="文章" v-if="props.msg==='文章'"/>
        <el-radio-button label="搜索"/>
        <el-radio-button label="登录" v-if="getToken()==null||getToken==null"/>
        <el-radio-button label="管理" v-if="getToken()!=null&&getToken!=null"/>
    </el-radio-group>

</template>

<style scoped>


</style>