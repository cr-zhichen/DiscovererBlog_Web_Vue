<script setup>

import {getNowFormatDate, getToken} from "../tool/tool.js";
import {deleteCommentPost} from "@/tool/PostAPI.js";
import {ElNotification} from "element-plus";

const props = defineProps({
    comment: Object
})

const emit = defineEmits(['response'])

//删除评论
const deleteComment = async () => {
    if (confirm("确定删除该评论吗？")) {
        deleteCommentPost(
            props.comment.id,
            getToken(),
            (res) => {
                ElNotification({
                    title: '删除成功',
                    type: 'success',
                    message: res.message
                });
                //刷新当前页面
                window.location.reload();
            },
            (err) => {
                ElNotification({
                    title: '删除失败',
                    type: 'error',
                    message: err
                });
            });
    }
}

//发表评论
const submitComment = async () => {

    //将页面滚动到最后
    window.scrollTo(0, document.body.scrollHeight);
    //将父评论的id传递给子组件
    emit('response', props.comment.id)

}

</script>

<!-- CommentItem.vue -->
<template>
    <div>
        <div class="comment">
            <h5 class="comentIten-userName">{{ props.comment.userName }}</h5>
            <h5 class="comentIten-reply" @click="submitComment">回复</h5>
            <p class="comentIten-content">{{ props.comment.content }}</p>
            <h5 class="comentIten-delete" @click="deleteComment">删除</h5>
            <small>{{ getNowFormatDate(props.comment.createdAt) }}</small>
        </div>
        <div class="replies" v-if="props.comment.comments.length > 0">
            <CommentItem @response="(o) => {props.comment.id = o;emit('response', props.comment.id)}"
                         v-for="(reply, index) in props.comment.comments"
                         :key="index"
                         :comment="reply"
            />
        </div>
    </div>

</template>

<style scoped>
.comment {
    /* 根据需要自定义样式 */
}

.replies {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 30px 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.comentIten-userName {
    color: #409EFF;
    margin: 0;
}

.comentIten-delete {
    color: #FA8072;
    margin: 0;
    float: right;
    cursor: pointer;
}

.comentIten-reply {
    color: #409EFF;
    margin: 0;
    float: right;
    cursor: pointer;
}

.comentIten-content {
    margin: 0;
}
</style>
