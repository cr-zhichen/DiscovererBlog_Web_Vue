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

</script>

<template>

    <div class="app-fixed">
        <el-button :icon="themeIcon" circle size="large" @click="switchTheme()"/>
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

/* 根据设备宽度进行自适应 */
@media screen and (max-width: 768px) {
    .common-layout {
        max-width: 99%; /* 调整为适合移动设备的宽度 */
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


</style>
