<script setup>
import {ref} from 'vue'
import {ElNotification} from "element-plus";
import {getToken} from "@/tool/tool.js";
import {getUserInfoPost, postACommentPost} from "@/tool/PostAPI.js";

const props = defineProps({
    msg: Object
})


const form = ref({
    name: '',
    email: '',
    comment: ''
})

const isLogin = ref(false);

const submitComment = async () => {

    if (form.value.name === '' || form.value.email === '' || form.value.comment === '') {
        ElNotification({
            title: '发表评论失败',
            type: 'error',
            message: '请填写完整信息'
        });
        return;
    }

    postACommentPost(
        props.msg.articleId,
        form.value.name,
        form.value.email,
        props.msg.parentId,
        form.value.comment,
        getToken(),
        (res) => {
            ElNotification({
                title: '发表成功',
                type: 'success',
                message: res.message
            });
            //刷新当前页面
            window.location.reload();
        },
        (err) => {
            ElNotification({
                title: '发表评论失败',
                type: 'error',
                message: err
            });
        });
}

if (getToken() != null || getToken() != "") {
    getUserInfoPost(
        getToken(),
        (res) => {
            form.value.email = res.data.email;
            form.value.name = res.data.userName;
            isLogin.value = true;
        }, (err) => {

        });
}

const emailRules = [
    {required: true, message: '邮箱不能为空', trigger: 'blur'},
    {type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur'},
];

const commentRules = [
    {required: true, message: '评论不能为空', trigger: 'blur'},
];

const nameRules = [
    {required: true, message: '昵称不能为空', trigger: 'blur'},
];

</script>

<template>

    <div
            class="comment-div">

        <h2 class="comment-div-h2">评论{{ props.msg.parentId }}</h2>

        <el-form
                :model="form"
                :label-position="left"
                ref="commentForm"
                @submit.native.prevent="submitComment"
                class="comment-form">

            <el-form-item
                    label="昵称："
                    class="comment-form-item"
                    prop="name"
                    :rules="nameRules">
                <el-input
                        v-model="form.name"
                        class="comment-form-item"
                        :disabled="isLogin"/>
            </el-form-item>

            <el-form-item
                    label="邮箱："
                    class="comment-form-item"
                    prop="email"
                    :rules="emailRules">
                <el-input v-model="form.email"
                          class="comment-form-item"
                          :disabled="isLogin"/>
            </el-form-item>

            <el-form-item
                    label="评论："
                    class="comment-form-item"
                    prop="comment"
                    :rules="commentRules">
                <el-input
                        type="textarea"
                        v-model="form.comment"
                        class="comment-form-item comment-form-textarea"/>
            </el-form-item>

            <el-form-item class="comment-form-item">
                <el-button
                        type="primary"
                        @click="submitComment"
                        class="comment-form-primary">发送评论
                </el-button>
            </el-form-item>

        </el-form>

    </div>

</template>


<style scoped>

.comment-form {
    margin: 0;
}

.comment-form-item {
}

.comment-div {
    padding: 30px 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 30px 0px;
}

.comment-form-textarea {
    resize: none;
}

.comment-form-primary {
    margin-top: 10px;
    width: 100%;
}

.comment-div-h2 {
    padding: 0;
    text-align: center;

}


</style>