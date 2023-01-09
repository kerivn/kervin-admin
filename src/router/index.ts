import { Router, createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/layout/index.vue')
const router: Router = createRouter({
    history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/dashboard/index.vue'),
                    name: 'Dashboard',
                    meta: { title: 'dashboard', icon: 'homepage', affix: true },
                },
                {
                    path: '401',
                    component: () => import('@/views/error-page/401.vue'),
                    meta: { hidden: true },
                },
            ],
        },
    ],
})
