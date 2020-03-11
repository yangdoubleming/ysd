import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    { path: '*', redirect: '/404', hidden: true },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home'),
            },
            {
                path: '/businessInfo',
                name: 'businessInfo',
                component: () => import('@/views/businessInfo'),
            },
            {
                path: '/insuranceInfo',
                component: () => import('@/views/insuranceInfo'),
            },
            {
                path: '/loanRecords',
                component: () => import('@/views/loanRecords'),
            },
            {
                path: '/loanDetails',
                component: () => import('@/views/loanDetails'),
            },
            {
                path: '/registerEnd',
                component: () => import('@/views/registerEnd'),
            },
            {
                path: '/authorize',
                component: () => import('@/views/authorize'),
            },
            {
                path: '/amazonAuthorizeList',
                component: () => import('@/views/authorize/storeAuthorize/amazonAuthorizeList'),
            },
            {
                path: '/wishAuthorizeList',
                component: () => import('@/views/authorize/storeAuthorize/wishAuthorizeList'),
            },
            {
                path: '/ebayAuthorizeList',
                component: () => import('@/views/authorize/storeAuthorize/ebayAuthorizeList'),
            },
            {
                path: '/credit',
                component: () => import('@/views/credit'),
            },
            {
                path: '/orderList',
                component: () => import('@/views/orderList'),
            },
            {
                path: '/shopAuth',
                component: () => import('@/views/shopAuth'),
            },
            {
                path: '/shopDetails',
                component: () => import('@/views/shopDetails'),
            },
            {
                path: '/uploadInfo',
                component: () => import('@/views/uploadInfo'),
            },
            {
                path: '/supplyInfo',
                component: () => import('@/views/supplyInfo'),
            },
            {
                path: '/summary',
                component: () => import('@/views/summary'),
            },
            {
                path: '/infoComplete',
                component: () => import('@/views/infoComplete'),
            }
        ], 
        hidden: true 
    },
];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
