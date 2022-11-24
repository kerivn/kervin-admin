import {  RouteRecordRaw } from 'vue-router';
export const Layout = () => import('@/layout/index.vue');
export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/redirect',
        component: Layout,
        meta: { hidden: true },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index.vue'),
            },
        ],
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: { hidden: true },
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue'),
        meta: { hidden: true },
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashbord/index.vue'),
                name: 'Dashboard',
                meta: { title: 'dashboard', icon: 'homepage', affix: true,hidden: false },
            },
            {
                path: '401',
                component: () => import('@/views/error-page/401.vue'),
                meta: { hidden: true },
            },
        ],
    },
    // 外部链接
  /*{
        path: '/external-link',
        component: Layout,
        children: [
            {
                path: 'https://www.cnblogs.com/haoxianrui/',
                meta: { title: '外部链接', icon: 'link' }
            }
        ]
    }*/
  // 多级嵌套路由
  /* {
         path: '/nested',
         component: Layout,
         redirect: '/nested/level1/level2',
         name: 'Nested',
         meta: {title: '多级菜单', icon: 'nested'},
         children: [
             {
                 path: 'level1',
                 component: () => import('@/views/nested/level1/index.vue'),
                 name: 'Level1',
                 meta: {title: '菜单一级'},
                 redirect: '/nested/level1/level2',
                 children: [
                     {
                         path: 'level2',
                         component: () => import('@/views/nested/level1/level2/index.vue'),
                         name: 'Level2',
                         meta: {title: '菜单二级'},
                         redirect: '/nested/level1/level2/level3',
                         children: [
                             {
                                 path: 'level3-1',
                                 component: () => import('@/views/nested/level1/level2/level3/index1.vue'),
                                 name: 'Level3-1',
                                 meta: {title: '菜单三级-1'}
                             },
                             {
                                 path: 'level3-2',
                                 component: () => import('@/views/nested/level1/level2/level3/index2.vue'),
                                 name: 'Level3-2',
                                 meta: {title: '菜单三级-2'}
                             }
                         ]
                     }
                 ]
             },
         ]
     }*/
];
