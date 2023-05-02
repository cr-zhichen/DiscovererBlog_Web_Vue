<script setup>
import {ref} from 'vue'
import {deleteArticlePost, deleteHistoryPost, queryArticleListPost, returnArticlePost} from "@/tool/PostAPI.js";
import {getToken} from "@/tool/tool.js";
import {ElMessage, ElMessageBox, ElNotification} from "element-plus";

const articleList = ref();

const _queryArticleList = () => {
    queryArticleListPost(
        1,
        999999999,
        null,
        null,
        ((res) => {
            articleList.value = res.data.articleList;
        }),
        ((err) => {
            ElNotification({
                title: '获取文章列表失败',
                type: 'error',
                message: err.message
            });
        }));
}

_queryArticleList();

const emit = defineEmits(['editHistoryArticle', 'editArticle', 'historyArticleId'])

const _editArticle = (id) => {
    returnArticlePost(id,
        getToken(),
        ((res) => {
            emit('editArticle', res.data)
            console.log(res.data)
        }),
        ((err) => {
            ElNotification({
                title: '获取文章失败',
                type: 'error',
                message: err.message
            });
        }));
}

const deleteArticle = (id) => {
    ElMessageBox.confirm(
        '确定删除该文章吗？',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            deleteArticlePost(id,
                getToken(),
                ((res) => {
                    ElNotification({
                        title: '删除文章成功',
                        type: 'success',
                        message: res.message
                    });
                    //刷新页面
                    _queryArticleList();
                }),
                ((err) => {
                    ElNotification({
                        title: '删除文章失败',
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

const dialogTableVisible = ref(false);
const gridData = ref();

const viewHistoryArticle = (id) => {
    returnArticlePost(id,
        getToken(),
        ((res) => {
            gridData.value = res.data;
            dialogTableVisible.value = true;
        }),
        ((err) => {
            ElNotification({
                title: '获取文章失败',
                type: 'error',
                message: err.message
            });
        }));
}


const deleteHistoryArticle = (id) => {

    ElMessageBox.confirm(
        '确定删除该历史记录吗？',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            deleteHistoryPost(id,
                getToken(),
                ((res) => {
                    ElNotification({
                        title: '删除文章历史记录成功',
                        type: 'success',
                        message: res.message
                    });
                    dialogTableVisible.value = false;
                    //刷新页面
                    _queryArticleList();
                }),
                ((err) => {
                    ElNotification({
                        title: '删除文章历史记录失败',
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

const contentCutOff = (row) => {
    return row.content.length > 100 ? row.content.substring(0, 100) + '...' : row.content;
}

const _editHistoryArticle = (id, row) => {
    dialogTableVisible.value = false;
    emit('editArticle', gridData.value)
    emit('editHistoryArticle', row)
}

</script>

<template>

    <h1>文章管理</h1>


  <!--    弹出表格 用来显示历史记录-->

    <el-dialog v-model="dialogTableVisible" title="Shipping address">
        <el-table :data="gridData.history">
            <el-table-column property="historyId" label="历史记录ID"/>
            <el-table-column property="title" label="标题"/>
            <el-table-column property="tags" label="标签"/>
            <el-table-column property="createdAt" label="创建时间"/>

            <el-table-column property="content" label="内容" min-width="300">
                <template #default="{row}">
                    {{ contentCutOff(row) }}
                </template>
            </el-table-column>

            <el-table-column property="historyId" label="编辑" width="84">
                <template #default="{row}">
                    <el-button
                            type="primary"
                            size="mini"
                            @click="_editHistoryArticle(row.historyId,row)">
                        编辑
                    </el-button>
                </template>
            </el-table-column>

            <el-table-column property="historyId" label="删除" width="84">
                <template #default="{row}">
                    <el-button
                            type="danger"
                            size="mini"
                            @click="deleteHistoryArticle(row.historyId)">
                        删除
                    </el-button>
                </template>
            </el-table-column>

        </el-table>
    </el-dialog>

    <el-table :data="articleList" style="width: 100%">
        <el-table-column prop="id" label="ID"/>
        <el-table-column prop="title" label="标题"/>
        <el-table-column prop="tags" label="标签"/>
        <el-table-column prop="updatedAt" label="更新时间"/>
        <el-table-column prop="introduction" label="内容" min-width="300"/>

        <el-table-column prop="id" label="编辑" width="84">
            <template #default="{row}">
                <el-button type="primary" size="mini" @click="_editArticle(row.id)">编辑</el-button>
            </template>
        </el-table-column>

        <el-table-column prop="id" label="删除" width="84">
            <template #default="{row}">
                <el-button type="danger" size="mini" @click="deleteArticle(row.id)">删除</el-button>
            </template>
        </el-table-column>

        <!--        查看历史-->
        <el-table-column prop="id" label="查看历史" width="84">
            <template #default="{row}">
                <el-button type="success" size="mini" @click="viewHistoryArticle(row.id)">历史</el-button>
            </template>
        </el-table-column>
    </el-table>

</template>

<style scoped>

</style>