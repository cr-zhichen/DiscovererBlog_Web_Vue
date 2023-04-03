<script setup>
import {ref} from 'vue'
import {getUserInfoPost, modifyUserNamePost} from "@/tool/PostAPI.js";
import {getToken} from "@/tool/tool.js";
import {ElNotification} from "element-plus";

const props = defineProps({
  msg: String
})

const input = ref("");
const email = ref("");
const userName = ref("");

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

</template>


<style scoped>


</style>