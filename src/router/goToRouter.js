import {useRouter} from "vue-router";
import {id} from "element-plus/es/locale/index";

//跳转到首页
export function useGoToHome() {
    const router = useRouter();

    return function () {
        router.push("/");
    };
}

//跳转到搜索
export function useGoToSearch() {
    const router = useRouter();

    return function () {
        router.push("/search");
    };
}

//跳转到文章界面
export function useGoToArticle() {
    const router = useRouter();

    return function (id) {

        if (id == null) {
            router.push("/");
        } else {
            router.push(`/article/${id}`);
        }
    }
}

//跳转到登录界面
export function useGoToLogin() {
    const router = useRouter();

    return function () {
        router.push("/login");
    };
}

//跳转到管理界面
export function useGoToManage() {
    const router = useRouter();

    return function () {
        router.push("/manage");
    };
}