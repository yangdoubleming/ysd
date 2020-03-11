import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getUser } from '@/utils/auth' // 验权

const whiteList = ['/businessInfo'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (getUser()) {
        if (store.getters.user) {
            next()
        } else {
            Message.error('登录异常，请重新登录')
            store.dispatch('FedLogOut').then(() => {
                next({ path: '/businessInfo' })
            })
        }
    } else {
        if (to.path.indexOf('/businessInfo') !== -1||to.path.indexOf('/credit') !== -1) {
            next()
        } else {
            if(to.path=='/'){
                next('/businessInfo')
            }else{
                Message.warning('请先登录')
                next('/businessInfo')
            }
        }
    }
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
