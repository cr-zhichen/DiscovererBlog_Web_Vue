const url = "http://127.0.0.1:8080";

const loginUrl = url + "/User/Login";//登录
const registerUrl = url + "/User/Register";//注册
const resetPasswordUrl = url + "/User/ResetPassword";//修改密码
const modifyUserNameUrl = url + "/User/ModifyUserName";//修改用户名
const sendCodeUrl = url + "/User/SendCode";//发送验证码
const getUserInfoUrl = url + "/User/GetUserInfo";//获取用户信息

const queryArticleListUrl = url + "/Article/QueryArticleList";//查询文章列表
const returnArticleUrl = url + "/Article/ReturnArticle";//返回文章
const deleteHistoryUrl = url + "/Article/DeleteHistory";//删除文章历史
const deleteArticleUrl = url + "/Article/DeleteArticle";//删除文章
const uploadArticleUrl = url + "/Article/UploadArticle";//上传文章
const queryArticleUrl = url + "/Article/QueryArticle";//查看文章

const viewCommentUrl = url + "/Comment/ViewComment";//查看文章评论
const postACommentUrl = url + "/Comment/PostAComment";//发表评论
const deleteCommentUrl = url + "/Comment/DeleteComment";//删除评论

const commentCountUrl = url + "/Statistics/CommentCount";//评论数统计
const articleCountUrl = url + "/Statistics/ArticleCount";//文章数统计

//=================//
//===Post方法实现===//
//=================//

//登录方法 Post
export function loginPost(email, password, ok, err) {
    var body = {
        "email": email,
        "password": password
    };
    Post(loginUrl, null, body, ok, err);
}

//注册方法 Post
export function registerPost(userName, password, email, code, ok, err) {
    var body = {
        "userName": userName,
        "password": password,
        "email": email,
        "code": code
    };
    Post(registerUrl, null, body, ok, err);
}

//修改密码方法 Post
export function resetPasswordPost(email, password, code, ok, err) {
    var body = {
        "email": email,
        "password": password,
        "code": code
    };
    Post(resetPasswordUrl, null, body, ok, err);
}

//修改用户名方法 Post
export function modifyUserNamePost(newUserName, token, ok, err) {
    var body = {
        "newUserName": newUserName
    };
    Post(modifyUserNameUrl, token, body, ok, err);
}

//获取用户信息 Post
export function getUserInfoPost(token, ok, err) {
    var body = {};
    Post(getUserInfoUrl, token, body, ok, err);
}

//发送验证码方法 Post
export function sendCodePost(email, ok, err) {
    var body = {
        "email": email
    };
    Post(sendCodeUrl, null, body, ok, err);
}

//查询文章列表 Post
export function queryArticleListPost(page, pageSize, tag, keyWord, ok, err) {
    var body = {
        "page": page,
        "pageSize": pageSize,
        "tag": tag,
        "keyWord": keyWord
    };
    Post(queryArticleListUrl, null, body, ok, err);
}

//返回文章 Post
export function returnArticlePost(articleId, token, ok, err) {
    var body = {
        "articleId": articleId
    };
    Post(returnArticleUrl, token, body, ok, err);
}

//删除文章历史 Post
export function deleteHistoryPost(historyId, token, ok, err) {
    var body = {
        "historyId": historyId
    };
    Post(deleteHistoryUrl, token, body, ok, err);
}

//删除文章 Post
export function deleteArticlePost(articleId, token, ok, err) {
    var body = {
        "articleId": articleId
    };
    Post(deleteArticleUrl, token, body, ok, err);
}

//上传文章 Post
export function uploadArticlePost(title, content, md_Content, tags, createTime, updateTime, articleId, token, ok, err) {
    var body = {
        "title": title,
        "content": content,
        "md_Content": md_Content,
        "tags": tags,
        "createTime": createTime,
        "updateTime": updateTime,
        "articleId": articleId
    };
    Post(uploadArticleUrl, token, body, ok, err);
}

//查看文章 Post
export function queryArticlePost(articleId, ok, err) {
    var body = {
        "articleId": articleId
    };
    Post(queryArticleUrl, null, body, ok, err);
}

//查看文章评论 Post
export function viewCommentPost(articleId, ok, err) {
    var body = {
        "articleId": articleId
    };
    Post(viewCommentUrl, null, body, ok, err);
}

//发表文章评论 Post
export function postACommentPost(articleId, userName, email, parentId, content, token, ok, err) {
    var body = {
        "articleId": articleId,
        "userName": userName,
        "email": email,
        "parentId": parentId,
        "content": content
    };
    Post(postACommentUrl, token, body, ok, err);
}

//删除文章评论 Post
export function deleteCommentPost(commentId, ok, err) {
    var body = {
        "commentId": commentId
    };
    Post(deleteCommentUrl, null, body, ok, err);
}

//评论数统计 Post
export function commentCountPost(ok, err) {
    var body = {};
    Post(commentCountUrl, null, body, ok, err);
}

//文章数统计 Post
export function articleCountPost(ok, err) {
    var body = {};
    Post(articleCountUrl, null, body, ok, err);
}

//=================//
//====Post方法=====//
//=================//

//Post方法
export function Post(url, token, body, ok, err) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    if (token != null) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
    }
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange =

        function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    //转换为json对象
                    let jsonObject = JSON.parse(xhr.responseText);

                    if (jsonObject.statusCode == -1) {
                        err(jsonObject.message);
                    } else {
                        ok(jsonObject);
                    }
                } else if (xhr.status == 400) {
                    let jsonObject = JSON.parse(xhr.responseText);
                    err(jsonObject.title);
                } else if (xhr.status == 401) {
                    err("token无效");
                } else {
                    err("未知错误");
                }
            }
        }

    //将body转换为json字符串
    body = JSON.stringify(body);
    xhr.send(body);
}