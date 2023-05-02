<script setup>

import {computed, ref} from 'vue'

import Routes from "./components/Routes.vue";
import Background from "./components/Background.vue";
import {Search} from "@element-plus/icons-vue";
import {getTheme, getThemeIcon, toggleTheme} from "@/tool/themeChange.js";


const childMsg = ref();

const themeIcon = ref(getThemeIcon());

const switchTheme = () => {
    toggleTheme();
    themeIcon.value = getThemeIcon();
}

const backToTheTopOfThePage = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//判断用户距离页面顶部的距离，如果大于100，则显示返回顶部按钮
const isShowBackToTheTopOfThePage = ref(false)

//用户滚动页面时，判断用户距离页面顶部的距离，如果大于100，则显示返回顶部按钮
window.onscroll = () => {
    isShowBackToTheTopOfThePage.value = window.pageYOffset > 100;
}

</script>

<template>

    <div class="app-fixed">
        <div class="app-fixed-btn" v-show="isShowBackToTheTopOfThePage">
            <el-button icon="CaretTop" circle size="large" @click="backToTheTopOfThePage()"/>
        </div>
        <div class="app-fixed-btn">
            <el-button :icon="themeIcon" circle size="large" @click="switchTheme()"/>
        </div>
    </div>

    <div class="common-layout">
        <!--        导入背景，并放在最底层-->
        <Background style="z-index: -1"/>
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

/* 适应手机 */
@media screen and (max-width: 768px) {
    .common-layout {
        max-width: 99%; /* 调整为适合移动设备的宽度 */
    }

    .el-main {
        padding-left: 0;
        padding-right: 0;
    }
}

/* 适应带鱼屏 */
@media screen and (min-width: 2560px) {
    .common-layout {
        max-width: 60%; /* 调整为适合宽屏显示器的宽度 */
        margin-left: auto; /* 左边距自动 */
        margin-right: auto; /* 右边距自动 */
    }
}


.app-fixed {
    /*    固定在右下角*/
    position: fixed;
    right: 5%;
    bottom: 5%;
    /*    使其不会被遮挡*/
    z-index: 999;
}

.app-fixed-btn {
    margin-bottom: 10px;
}

</style>
