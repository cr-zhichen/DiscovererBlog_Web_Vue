<!-- CommentItem.vue -->
<template>
  <div>
    <div class="comment">
      <h5 class="comentIten-userName">{{ props.comment.userName }}</h5>
      <p class="comentIten-content">{{ props.comment.content }}</p>
      <small>{{ getNowFormatDate(props.comment.createdAt) }}</small>
    </div>
    <div class="replies" v-if="props.comment.comments.length > 0">
      <CommentItem
          v-for="(reply, index) in props.comment.comments"
          :key="index"
          :comment="reply"
      />
    </div>
  </div>

</template>

<script setup>

import {getNowFormatDate} from "../tool/tool.js";

const props = defineProps({
  comment: Object
})
</script>

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

.comentIten-content {
  margin: 0;
}
</style>
