<script setup>
import {ref} from 'vue'
import {getUserInfoPost, modifyUserNamePost, resetPasswordPost, sendCodePost} from "@/tool/PostAPI.js";
import {getToken} from "@/tool/tool.js";
import {ElNotification} from "element-plus";

const props = defineProps({
    msg: String
})

const input = ref("");
const email = ref("");
const userName = ref("");

const verificationCode = ref("");
const newPassword = ref("");

const sendCode = () => {
    //发送验证码
    sendCodePost(
        email.value,
        (res) => {
            ElNotification({
                title: '发送验证码成功',
                type: 'success',
                message: res.message
            });
        }, (err) => {
            ElNotification({
                title: '发送验证码失败',
                type: 'error',
                message: err
            });
        });
}

const revisePassword = () => {
    //修改密码
    resetPasswordPost(
        email.value,
        newPassword.value,
        verificationCode.value,
        (res) => {
            ElNotification({
                title: '修改密码成功',
                type: 'success',
                message: res.message
            });
        }, (err) => {
            ElNotification({
                title: '修改密码失败',
                type: 'error',
                message: err
            });
        });
}

const getUserInfo = () => {
    getUserInfoPost(
        getToken(),
        (res) => {
            email.value = res.data.email;
            userName.value = res.data.userName;
        }, (err) => {
            ElNotification({
                title: '获取用户信息失败',
                type: 'error',
                message: err
            });
            //跳转到登录页面
            window.location.href = '/login'
        });
}
getUserInfo();

const reviseUserName = () => {
    modifyUserNamePost(input.value,
        getToken(),
        (res) => {
            ElNotification({
                title: '修改用户名成功',
                type: 'success',
                message: res.message
            });
            getUserInfo();
        }, (err) => {
            ElNotification({
                title: '修改用户名失败',
                type: 'error',
                message: err
            });
        });
}

</script>

<template>

    <h1>修改用户信息</h1>
    <h3>用户邮箱：{{ email }}</h3>
    <h3>当前用户名：{{ userName }}</h3>

    <p>
        <el-input
                v-model="input"
                placeholder="请输入新的用户名"
                class="manage-tabs-input"/>
    </p>

    <p>
        <el-button
                type="primary"
                @click="reviseUserName">修改用户名
        </el-button>
    </p>

    <h1>修改密码</h1>
    <p>
        <el-input
                placeholder="请输入新的密码"
                class="manage-tabs-input"
                v-model="newPassword"/>
    </p>

    <p>
        <el-input
                placeholder="请输入邮箱验证码"
                class="manage-tabs-input"
                v-model="verificationCode"/>
    </p>

    <el-button
            type="primary"
            @click="sendCode">发送验证码
    </el-button>

    <el-button
            type="danger"
            @click="revisePassword">修改密码
    </el-button>


</template>


<style scoped>


</style>