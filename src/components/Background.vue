<template>
    <div class="background"
         :style="{ backgroundImage: 'url(' + imageUrl + ')' }">

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
    },
    methods: {
        setBackgroundSize() {
            const element = this.$el;
            const width = element.offsetWidth;
            const height = element.offsetHeight;
            const aspectRatio = width / height;
            const imageAspectRatio = 1920 / 1080; // 假设图片宽高比为 16:9
            if (aspectRatio > imageAspectRatio) {
                element.style.backgroundSize = 'cover';
            } else {
                element.style.backgroundSize = 'contain';
            }
        }
    }
}
</script>

<style scoped>
.background {
    position: fixed; /* 确保背景组件不会随页面滚动而移动 */
    top: 0;
    left: 0;
    height: 100%; /* 设置背景组件的高度为视口高度 */
    width: 100%; /* 设置背景组件的宽度为100% */
    /*background-size: cover; !* 等比缩放背景图像以填充整个组件 *!*/
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
