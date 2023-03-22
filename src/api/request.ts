import axios from "axios";
import { ElMessage } from 'element-plus'

const text: boolean = false;

const service: any = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截
// 为每个接口请求头配置localStorage
service.interceptors.request.use(
    (config: any) => {
        config.headers.Authorization = localStorage.getItem('token')
        return config
    }, (error: any) => {
        return Promise.reject(new Error(error))
    }
)
// 响应拦截
service.interceptors.response.use(
    (res: any) => {
        const { data, meta } = res.data
        if (meta.status === 200 || meta.status === 201) {
            return data
        } else {
            ElMessage.error(meta.msg)
            return Promise.reject(new Error(meta.msg))
            // return ElMessage.error('请输入正确的账号密码！')
        }
    }, (error: any) => {
        error.response && ElMessage.error(error.response.data)
        return Promise.reject(new Error(error.response.data))
    }
)

export default service
