import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../../util';
import { ResultEnum } from '@/utils/enums/httpEnum';

const menus = [
    {
        path: '/system',
        component: 'Layout',
        redirect: '/system/user',
        meta: {
            title: '系统管理',
            icon: 'system',
            hidden: false,
            alwaysShow: true,
            roles: ['ADMIN'],
            keepAlive: true,
        },
        children: [
            {
                path: 'user',
                component: 'system/user/index',
                name: 'user',
                meta: {
                    title: '用户管理',
                    icon: 'user',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
            {
                path: 'role',
                component: 'system/role/index',
                name: 'role',
                meta: {
                    title: '角色管理',
                    icon: 'role',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
            {
                path: 'cmenu',
                component: 'system/menu/index',
                name: 'cmenu',
                meta: {
                    title: '菜单管理',
                    icon: 'menu',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
            {
                path: 'dept',
                component: 'system/dept/index',
                name: 'dept',
                meta: {
                    title: '部门管理',
                    icon: 'tree',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
            {
                path: 'dict',
                component: 'system/dict/index',
                name: 'dict',
                meta: {
                    title: '字典管理',
                    icon: 'dict',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
        ],
    },
    {
        path: '/multi-level-menu',
        component: 'Layout',
        redirect: '/nested/level1/level2',
        meta: {
            title: '多级菜单',
            icon: 'nested',
            hidden: false,
            alwaysShow: true,
            roles: ['ADMIN'],
            keepAlive: true,
        },
        children: [
            {
                path: 'nested_level1_index',
                component: 'nested/level1/index',
                redirect: '/nested/level1/level2',
                meta: {
                    title: '菜单一级',
                    icon: '',
                    hidden: false,
                    alwaysShow: true,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
                children: [
                    {
                        path: 'nested_level1_level2_index',
                        component: 'nested/level1/level2/index',
                        redirect: '/nested/level1/level2/level3',
                        meta: {
                            title: '菜单二级',
                            icon: '',
                            hidden: false,
                            alwaysShow: true,
                            roles: ['ADMIN'],
                            keepAlive: true,
                        },
                        children: [
                            {
                                path: 'nested_level1_level2_level3_index1',
                                component: 'nested/level1/level2/level3/index1',
                                name: 'nested_level1_level2_level3_index1',
                                meta: {
                                    title: '菜单三级-1',
                                    icon: '',
                                    hidden: false,
                                    alwaysShow: false,
                                    roles: ['ADMIN'],
                                    keepAlive: true,
                                },
                            },
                            {
                                path: 'nested_level1_level2_level3_index2',
                                component: 'nested/level1/level2/level3/index2',
                                name: 'nested_level1_level2_level3_index2',
                                meta: {
                                    title: '菜单三级-2',
                                    icon: '',
                                    hidden: false,
                                    alwaysShow: false,
                                    roles: ['ADMIN'],
                                    keepAlive: true,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: '/external-link',
        component: 'Layout',
        redirect: 'noredirect',
        meta: {
            title: '外部链接',
            icon: 'link',
            hidden: false,
            alwaysShow: true,
            roles: ['ADMIN'],
            keepAlive: true,
        },
        children: [
            {
                path: 'https://www.cnblogs.com/haoxianrui/',
                meta: {
                    title: 'document',
                    icon: 'link',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
        ],
    },
    {
        path: '/component',
        component: 'Layout',
        meta: {
            title: '组件封装',
            icon: 'menu',
            hidden: false,
            alwaysShow: true,
            roles: ['ADMIN'],
            keepAlive: true,
        },
        children: [
            {
                path: 'editor',
                component: 'component/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    icon: '',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
            {
                path: 'uploader',
                component: 'component/uploader',
                name: 'uploader',
                meta: {
                    title: '上传组件',
                    icon: '',
                    hidden: false,
                    alwaysShow: false,
                    roles: ['ADMIN'],
                    keepAlive: true,
                },
            },
        ],
    },
];

export default [
    {
        url: '/basic-api/sys/getMeuns',
        timeout: 1000,
        method: 'get',
        response: () => {
            return resultSuccess(menus);
        },
    },
    {
        url: '/basic-api/user/sessionTimeout',
        method: 'post',
        statusCode: 401,
        response: () => {
            return resultError();
        },
    },
    {
        url: '/basic-api/user/tokenExpired',
        method: 'post',
        statusCode: 200,
        response: () => {
            return resultError('Token Expired!', {
                code: ResultEnum.TIMEOUT as number,
            });
        },
    },
] as MockMethod[];
