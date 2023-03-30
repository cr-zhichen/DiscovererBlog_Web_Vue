import axios from "axios";

//获取公共文件 需要传入相对public文件夹的路径 和一个变量，用于存储公共文件的内容
export async function getForPath(path, value) {
    await axios.get(path)
        .then(res => {
            value.value = res.data;
        })
        .catch(err => {
            console.log(err);
        })
}

//获取配置文件 需要传入一个变量，用于存储配置文件的内容
export async function getConfig(value) {
    await axios.get('/config.json')
        .then(res => {
            value.value = res.data;
        })
        .catch(err => {
            console.log(err);
        })
}
