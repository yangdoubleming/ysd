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
        redirect: '/businessInfo',
        children: [
            {
                path: '/businessInfo',
                component: () => import('@/views/businessInfo'),
            },
            {
                path: '/businessInfo',
                name: 'businessInfo',
                component: () => import('@/views/businessInfo'),
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
