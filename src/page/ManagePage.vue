<script setup>
import {ref, watch, watchEffect} from 'vue'
import {articleCountPost, commentCountPost, deleteHistoryPost} from "@/tool/PostAPI.js";
import UserManager from "@/components/UserManager.vue";
import ArticleManager from "@/components/ArticleManager.vue";
import WriteAnArticleManager from "@/components/WriteAnArticleManager.vue";
import CommentManager from "@/components/CommentManager.vue";
import {ElMessage, ElMessageBox, ElNotification} from "element-plus";
import {getToken} from "@/tool/tool.js";
import {useGoToLogin} from "@/router/goToRouter.js";

const goToLogin = useGoToLogin();

const emit = defineEmits(['response'])
emit('response', '管理')


//文章数量
const articleNum = ref(0);
//评论数量
const commentNum = ref(0);

const tabPosition = ref('left')

const updateTabPosition = () => {
    if (window.innerWidth < 768) {
        tabPosition.value = 'top';
    } else {
        tabPosition.value = 'left';
    }
};

// 监听屏幕宽度变化
watchEffect(() => {
    window.addEventListener('resize', updateTabPosition);

    // 初始化时执行一次
    updateTabPosition();

    return () => {
        // 当组件卸载时，移除事件监听
        window.removeEventListener('resize', updateTabPosition);
    };
});


articleCountPost(
    (res) => {
        articleNum.value = res.data.count;
    }, (err) => {
        console.log(err);
    });

commentCountPost(
    (res) => {
        commentNum.value = res.data.count;
    }, (err) => {
        console.log(err);
    });

const loginOut = () => {

    ElMessageBox.confirm(
        '确定退出登录么？',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            localStorage.clear();
            goToLogin();
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消退出',
            })
        })

}

const tab = ref('用户管理')

const editArticle = ref(null)

const editHistoryArticle = ref(null)

const historyArticleId = ref(null)


</script>

<template>
    <el-tabs
            :tab-position="tabPosition"
            class="manage-tabs"
            v-model="tab"
    >
        <el-tab-pane label="用户管理" name="用户管理" class="manage-tabs-label">
            <UserManager
                    v-if="tab=='用户管理'"/>
        </el-tab-pane>
        <el-tab-pane label="撰写文章" name="撰写文章" class="manage-tabs-label">
            <WriteAnArticleManager
                    :editArticleMsg="editArticle"
                    :editHistoryArticleMsg="editHistoryArticle"
                    :historyArticleId="historyArticleId"
                    @giveUp="(o) =>{
                        editArticle=null;
                        editHistoryArticle=null;
                        historyArticleId=null;
                    }"
                    v-if="tab=='撰写文章'"/>
        </el-tab-pane>
        <el-tab-pane label="文章管理" name="文章管理" class="manage-tabs-label">
            <ArticleManager
                    @editArticle="(o) =>{
                        editArticle=o;
                        tab='撰写文章';
                    }"
                    @editHistoryArticle="(o) =>{
                        editHistoryArticle=o;
                        tab='撰写文章';
                    }"
                    @historyArticleId="(o) =>{
                        historyArticleId=o;
                    }"
                    v-if="tab=='文章管理'"/>
        </el-tab-pane>
        <el-tab-pane label="评论管理" name="评论管理" class="manage-tabs-label">
            <CommentManager
                    v-if="tab=='评论管理'"/>
        </el-tab-pane>
        <el-tab-pane label="退出登录" name="退出登录" class="manage-tabs-label">
            <h1>退出登录</h1>
            <el-button
                    type="danger"
                    @click="loginOut"
                    v-if="tab=='退出登录'">退出登录
            </el-button>
        </el-tab-pane>
    </el-tabs>

</template>

<style scoped>

</style>