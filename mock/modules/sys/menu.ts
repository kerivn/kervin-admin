import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../../util';
import { ResultEnum } from '@/utils/enums/httpEnum';

const menus = [
    {
      "id": "1",
      "parentId": "0",
      "name": "系统管理",
      "icon": "system",
      "routeName": null,
      "routePath": null,
      "component": "Layout",
      "sort": 1,
      "visible": 1,
      "redirect": null,
      "type": "CATALOG",
      "perm": null,
      "children": [
        {
          "id": "2",
          "parentId": "1",
          "name": "用户管理",
          "icon": "user",
          "routeName": null,
          "routePath": null,
          "component": "system/user/index",
          "sort": 1,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": [
            {
              "id": "31",
              "parentId": "2",
              "name": "用户新增",
              "icon": "",
              "routeName": null,
              "routePath": null,
              "component": null,
              "sort": 1,
              "visible": 1,
              "redirect": null,
              "type": "BUTTON",
              "perm": "sys:user:add",
              "children": []
            },
            {
              "id": "32",
              "parentId": "2",
              "name": "用户编辑",
              "icon": "",
              "routeName": null,
              "routePath": null,
              "component": null,
              "sort": 2,
              "visible": 1,
              "redirect": null,
              "type": "BUTTON",
              "perm": "sys:user:edit",
              "children": []
            },
            {
              "id": "33",
              "parentId": "2",
              "name": "用户删除",
              "icon": "",
              "routeName": null,
              "routePath": null,
              "component": null,
              "sort": 3,
              "visible": 1,
              "redirect": null,
              "type": "BUTTON",
              "perm": "sys:user:delete",
              "children": []
            }
          ]
        },
        {
          "id": "3",
          "parentId": "1",
          "name": "角色管理",
          "icon": "role",
          "routeName": null,
          "routePath": null,
          "component": "system/role/index",
          "sort": 2,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": []
        },
        {
          "id": "4",
          "parentId": "1",
          "name": "菜单管理",
          "icon": "menu",
          "routeName": null,
          "routePath": null,
          "component": "system/menu/index",
          "sort": 3,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": []
        },
        {
          "id": "5",
          "parentId": "1",
          "name": "部门管理",
          "icon": "tree",
          "routeName": null,
          "routePath": null,
          "component": "system/dept/index",
          "sort": 4,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": []
        },
        {
          "id": "6",
          "parentId": "1",
          "name": "字典管理",
          "icon": "dict",
          "routeName": null,
          "routePath": null,
          "component": "system/dict/index",
          "sort": 5,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": []
        }
      ]
    },
    {
      "id": "20",
      "parentId": "0",
      "name": "多级菜单",
      "icon": "nested",
      "routeName": null,
      "routePath": null,
      "component": "Layout",
      "sort": 7,
      "visible": 1,
      "redirect": null,
      "type": "CATALOG",
      "perm": null,
      "children": [
        {
          "id": "21",
          "parentId": "20",
          "name": "菜单一级",
          "icon": "",
          "routeName": null,
          "routePath": null,
          "component": "nested/level1/index",
          "sort": 1,
          "visible": 1,
          "redirect": null,
          "type": "CATALOG",
          "perm": null,
          "children": [
            {
              "id": "22",
              "parentId": "21",
              "name": "菜单二级",
              "icon": "",
              "routeName": null,
              "routePath": null,
              "component": "nested/level1/level2/index",
              "sort": 1,
              "visible": 1,
              "redirect": null,
              "type": "CATALOG",
              "perm": null,
              "children": [
                {
                  "id": "23",
                  "parentId": "22",
                  "name": "菜单三级-1",
                  "icon": "",
                  "routeName": null,
                  "routePath": null,
                  "component": "nested/level1/level2/level3/index1",
                  "sort": 1,
                  "visible": 1,
                  "redirect": null,
                  "type": "MENU",
                  "perm": null,
                  "children": []
                },
                {
                  "id": "24",
                  "parentId": "22",
                  "name": "菜单三级-2",
                  "icon": "",
                  "routeName": null,
                  "routePath": null,
                  "component": "nested/level1/level2/level3/index2",
                  "sort": 2,
                  "visible": 1,
                  "redirect": null,
                  "type": "MENU",
                  "perm": null,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "26",
      "parentId": "0",
      "name": "外部链接",
      "icon": "link",
      "routeName": null,
      "routePath": null,
      "component": "Layout",
      "sort": 9,
      "visible": 1,
      "redirect": null,
      "type": "CATALOG",
      "perm": null,
      "children": [
        {
          "id": "30",
          "parentId": "26",
          "name": "document",
          "icon": "link",
          "routeName": null,
          "routePath": null,
          "component": "",
          "sort": 1,
          "visible": 1,
          "redirect": null,
          "type": "EXTLINK",
          "perm": null,
          "children": []
        }
      ]
    },
    {
      "id": "36",
      "parentId": "0",
      "name": "组件封装",
      "icon": "menu",
      "routeName": null,
      "routePath": null,
      "component": "Layout",
      "sort": 10,
      "visible": 1,
      "redirect": null,
      "type": "CATALOG",
      "perm": null,
      "children": [
        {
          "id": "37",
          "parentId": "36",
          "name": "富文本编辑器",
          "icon": "",
          "routeName": null,
          "routePath": null,
          "component": "component/editor",
          "sort": 1,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": []
        },
        {
          "id": "38",
          "parentId": "36",
          "name": "上传组件",
          "icon": "",
          "routeName": null,
          "routePath": null,
          "component": "component/uploader",
          "sort": 2,
          "visible": 1,
          "redirect": null,
          "type": "MENU",
          "perm": null,
          "children": []
        }
      ]
    }
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
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
