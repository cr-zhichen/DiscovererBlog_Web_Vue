<template>
    <div class="image-container">
        <img :src="imageUrl" :alt="imageAlt" :style="{ maxWidth: '100%', height: 'auto' }">
    </div>
</template>

<script>
export default {
    name: "Background",
    data() {
        return {
            imageUrl: 'https://img-cdn.ccrui.cn/images/2020/07/18/20200330121127_FfvVm.jpg',
            imageAlt: 'background'
        }
    }
}
</script>

<style scoped>
.image-container {
    position: fixed; /* 确保背景组件不会随页面滚动而移动 */
    top: 0;
    left: 0;
    height: 100vh; /* 设置背景组件的高度为视口高度 */
    width: 100%; /* 设置背景组件的宽度为100% */
    background-size: cover; /* 等比缩放背景图像以填充整个组件 */
    background-position: center; /* 将背景图像置于组件中心 */
    opacity: 0.5; /* 设置透明度为50% */
}

</style>