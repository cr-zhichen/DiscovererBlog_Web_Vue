<template>

    <div>
        <h1 class="writeAnArticleManager-h1">
            撰写文章
            <el-text
                    type="primary"
                    v-if="articleId!=null">
                （更新文章/{{ articleId }}）
            </el-text>
        </h1>
    </div>
  <!--    发送按钮-->
    <el-button
            type="primary"
            class="writeAnArticleManager-sendButton"
            @click="sendArticle">上传文章
    </el-button>

  <!--    放弃修改按钮-->
    <el-button
            type="danger"
            class="writeAnArticleManager-giveUpButton"
            @click="giveUpArticle">放弃修改
    </el-button>

  <!--    标题输入框-->
    <el-input
            placeholder="请输入文章标题"
            v-model="title"
            class="writeAnArticleManager-inputTitle"></el-input>

  <!--    Tag输入框-->
    <el-input
            placeholder="请输入文章Tag,多个Tag请用逗号隔开"
            v-model="tag"
            class="writeAnArticleManager-inputTag"></el-input>

    <el-row
            :gutter="20"
            class="writeAnArticleManager-row">
        <el-col :span="12" class="writeAnArticleManager-col">
            <el-input
                    type="textarea"
                    placeholder="请使用MD语法输入文章内容"
                    :rows="20"
                    v-model="markdownContent"
                    class="writeAnArticleManager-inputContent"
                    autosize></el-input>
        </el-col>
        <el-col :span="12" class="writeAnArticleManager-col">
            <div
                    v-html="md.render(markdownContent)"
                    class="markdown-body writeAnArticleManager-mdDiv"
                    id="markdown-body"></div>
        </el-col>
    </el-row>

</template>

<script setup>
import {ref} from 'vue'
import MarkdownIt from "markdown-it";
import {uploadArticlePost} from "@/tool/PostAPI.js";
import {getToken} from "@/tool/tool.js";
import {ElMessage, ElMessageBox, ElNotification} from "element-plus";
import {useGoToArticle} from "@/router/goToRouter.js";

const goToArticle = useGoToArticle();

const md = new MarkdownIt();

const title = ref("");
const markdownContent = ref("");
const htmlContent = ref("");
const tag = ref("");

const emit = defineEmits(['giveUp'])

//需要修改文章的ID
const articleId = ref(null);

const props = defineProps({
    editArticleMsg: Object,
    editHistoryArticleMsg: Object,
    historyArticleId: Object,
})

const giveUpArticle = () => {

    ElMessageBox.confirm(
        '确定放弃修改吗？',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            articleId.value = null
            title.value = "";
            markdownContent.value = "";
            tag.value = "";
            emit('giveUp', true)
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消放弃修改',
            })
        })


}

if (props.editArticleMsg != null) {
    console.log("1111")
    title.value = props.editArticleMsg.title;
    markdownContent.value = props.editArticleMsg.markdownContent;
    tag.value = props.editArticleMsg.tags;
    articleId.value = props.editArticleMsg.id;
}

if (props.editHistoryArticleMsg != null) {
    console.log("2222")
    title.value = props.editHistoryArticleMsg.title;
    markdownContent.value = props.editHistoryArticleMsg.markdownContent;
    tag.value = props.editHistoryArticleMsg.tags;
    articleId.value = props.editArticleMsg.id;
}


const sendArticle = () => {
    uploadArticlePost(
        title.value,
        md.render(markdownContent.value),
        markdownContent.value,
        tag.value,
        null,
        null,
        articleId.value,
        getToken(),
        ((res) => {
            ElNotification({
                title: '上传成功',
                type: 'success',
                message: res.message
            });
            //跳转到文章界面
            goToArticle(res.data.id)
        }),
        ((err) => {
            ElNotification({
                title: '上传失败',
                type: 'error',
                message: err.message
            });
        })
    )
}

</script>

<style scoped>

.writeAnArticleManager-h1 {
    margin-bottom: 10px;
}

.writeAnArticleManager-sendButton {
    margin-bottom: 10px;
}

.writeAnArticleManager-giveUpButton {
    margin-bottom: 10px;
}

.writeAnArticleManager-inputTitle {
    width: 100%;
    margin-bottom: 10px;
}

.writeAnArticleManager-inputTag {
    width: 100%;
    margin-bottom: 10px;
}

.writeAnArticleManager-row {
    justify-content: center;
    height: 100%;
    display: flex;
}

.writeAnArticleManager-col {
    display: flex;
}

.writeAnArticleManager-mdDiv {
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    flex: 1;
    overflow: auto;
    padding-left: 20px;
}

.writeAnArticleManager-inputContent {
    resize: none;
    flex: 1;
    overflow: auto;
}
</style>
