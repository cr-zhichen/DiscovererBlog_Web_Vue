<script setup>

import {ref} from "vue";

const imageUrl = ref('https://img-cdn.ccrui.cn/images/2020/07/18/20200330121127_FfvVm.jpg')

</script>


<template>
    <div class="background"
         :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    </div>
</template>


<style scoped>
.background {
    position: fixed; /* 确保背景组件不会随页面滚动而移动 */
    top: 0;
    left: 0;
    height: 100%; /* 设置背景组件的高度为视口高度 */
    width: 100%; /* 设置背景组件的宽度为100% */
    background-size: cover; /* 等比缩放背景图像以填充整个组件 */
    background-position: center; /* 将背景图像置于组件中心 */
    background-repeat: no-repeat; /* 让背景不重复 */
    opacity: 1.0; /* 设置透明度为50% */
    /*    对图片进行高斯模糊*/
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
}

.dark .background {
    opacity: 0.5;
}

</style>
