<script setup>
import {ref} from 'vue'
import {viewCommentPost} from "@/tool/PostAPI.js";

const form = ref({
  name: '',
  email: '',
  comment: ''
})


</script>

<template>

  <div class="comment-div">

    <el-form
        :model="form"
        :label-position="left"
        class="comment-form">
      <el-form-item
          label="昵称："
          class="comment-form-item"/>
      <el-form-item class="comment-form-item">
        <el-input v-model="form.name"
                  class="comment-form-item"/>
      </el-form-item>
      <el-form-item label="邮箱："
                    class="comment-form-item"/>
      <el-form-item class="comment-form-item">
        <el-input v-model="form.email"
                  class="comment-form-item"/>
      </el-form-item>
      <el-form-item label="评论："
                    class="comment-form-item"/>
      <el-form-item
          class="comment-form-item">
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
  margin-bottom: 0px;
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
  float: right;
}

</style>