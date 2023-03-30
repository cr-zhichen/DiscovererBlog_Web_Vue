const routes = [
    {
        path: '/',
        name: 'home',
        title: '首页',
        component: () => import('@/page/HomePage.vue'), //.vue不能省略
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: () => import('@/page/LoginPage.vue'), //.vue不能省略
    },
    {
        path: '/article',
        name: 'article',
        title: '文章',
        component: () => import('@/page/ArticlePage.vue'), //.vue不能省略
    },
    {
        path: '/manage',
        name: 'manage',
        title: '管理',
        component: () => import('@/page/ManagePage.vue'), //.vue不能省略
    }
]
export default routes
