<script setup>
import {ref} from 'vue'
import {loginPost} from "@/tool/PostAPI.js";
import {ElNotification} from 'element-plus'

const emit = defineEmits(['response'])
emit('response', '登录')

const loginForm = ref({
  email: '',
  password: '',
});

const loading = ref(false)

const emailRules = [
  {required: true, message: '邮箱不能为空', trigger: 'blur'},
  {type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur'},
];

const passwordRules = [
  {required: true, message: '密码不能为空', trigger: 'blur'},
];


const submitForm = async () => {
  loading.value = true
  loginPost(
      loginForm.value.email,
      loginForm.value.password,
      (res) => {
        loading.value = false;
        //向本地存储中写入token
        localStorage.setItem("token", res.data.token);
        ElNotification({
          title: '登录成功',
          type: 'success',
          message: '欢迎回来'
        });
        window.location.href = '/manage'
        //跳转到管理页面
      }, (err) => {
        loading.value = false;
        ElNotification({
          title: '登录失败',
          type: 'error',
          message: err
        });
      });
}

</script>

<template>

  <div class="login-div"
       v-loading="loading">
    <h1 class="login-form-loginText">登录</h1>
    <el-form
        :model="loginForm"
        @submit.native.prevent="submitForm"
        class="login-form">

      <el-form-item
          label="邮箱"
          prop="email"
          :rules="emailRules">

        <el-input
            v-model="loginForm.email"
            placeholder="请输入邮箱">
        </el-input>

      </el-form-item>

      <el-form-item
          label="密码"
          prop="password"
          :rules="passwordRules">

        <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码">
        </el-input>

      </el-form-item>

      <el-form-item>
        <el-button
            type="primary"
            @click="submitForm"
            class="login-button">登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>

</template>

<style scoped>

.login-div {
  padding: 30px 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

@media screen and (max-width: 768px) {
  .login-div {
    width: 70%;
  }
}

.login-button {
  width: 100%;
}

.login-form-loginText {
  text-align: center;
  margin-bottom: 30px;
}

</style>