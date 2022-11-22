import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
export const Layout = () => import('@/layout/index.vue');
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: Layout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
