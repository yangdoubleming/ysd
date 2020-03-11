import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { BASE_URL } from './config'
import { getUser } from '@/utils/auth'
// import qs from 'qs'

// 创建axios实例


// var BASE_API = '';
// if (process.env.NODE_ENV == 'production') {
//     BASE_API = '"http://193.112.153.155:3001"';
// }else{
//     BASE_API = '"http://193.112.153.155:3001"';
// }
const service = axios.create({
    // baseURL: "http://preprod.saas.dousha8ao.com:8080", // 预发布环境
    baseURL: BASE_URL, // 测试环境
    withCredentials: true,
    timeout: 7000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    if(JSON.parse(localStorage.getItem('user'))){
        config.headers['token'] = JSON.parse(localStorage.getItem("user")).token;
        // config.headers['token'] = '22d3e97a29734e1f811d271840761168'
    }
    // if(config.method == "post") {
    //     qs.stringify(config.data)
    // }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
        * code为非20000是抛错 可结合自己业务进行修改
        */
        const res = response.data
        console.log("response",res)
        if (res.code !== 0) {
            
            if (res.code === 3) {
                MessageBox.confirm('登录已过期，可以取消继续留在该页面，或者重新登录', '重新登录？', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning',
                    width:'370px',
                }).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload()// 为了重新实例化vue-router对象 避免bug
                        window.location.href = `http://login.dowsure.com/login?href=${window.location.origin}${window.location.pathname}&api=${BASE_URL}/user/login`
                    })
                })
            }
            return Promise.reject(response.data)
        } else { 
            // return response.data
            return Promise.resolve(response.data)
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.msg||"请求失败",
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
