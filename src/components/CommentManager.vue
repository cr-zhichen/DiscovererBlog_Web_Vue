<script setup>
import {ref} from 'vue'
import {deleteCommentPost, viewAllCommentPost} from "@/tool/PostAPI.js";
import {getToken} from "@/tool/tool.js";
import {ElMessage, ElMessageBox, ElNotification} from "element-plus";

const comments = ref();

const _viewAllCommentPost = async () => {
    viewAllCommentPost(
        getToken(),
        ((res) => {
            comments.value = res.data.comments;
        }),
        ((err) => {
            ElNotification({
                title: '获取评论失败',
                type: 'error',
                message: err.message
            });
        }));
}

_viewAllCommentPost();


const deleteComment = (id) => {

    ElMessageBox.confirm(
        '确定删除该评论吗？',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            deleteCommentPost(id,
                getToken(),
                ((res) => {
                    ElNotification({
                        title: '删除评论成功',
                        type: 'success',
                        message: res.message
                    });
                    //刷新页面
                    _viewAllCommentPost();
                }),
                ((err) => {
                    ElNotification({
                        title: '删除评论失败',
                        type: 'error',
                        message: err.message
                    });
                }));
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
            })
        })


}

</script>

<template>

    <h1>评论管理</h1>

    <el-table :data="comments" style="width: 100%">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="userName" label="用户名"/>
        <el-table-column prop="email" label="用户邮箱"/>
        <el-table-column prop="content" label="评论内容"/>
        <el-table-column prop="createdAt" label="发表时间"/>
        <!--        根据id删除-->
        <el-table-column label="操作" width="84">
            <template #default="{row}">
                <el-button type="danger" @click="deleteComment(row.id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

</template>

<style scoped>

</style>