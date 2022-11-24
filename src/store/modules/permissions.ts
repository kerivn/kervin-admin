import { PermissionState } from './types';
import { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { constantRoutes } from '@/router/basic';
import { apiGetlistRoutes } from '@/api/menus';
import{routeModules} from '@/router/index';

export const Layout = () => import('@/layout/index.vue');
export const NotFound = () => import('@/views/error-page/404.vue');



const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    if (roles.includes('ROOT')) {
      return true;
    }
    return roles.some(role => {
      if (route.meta?.roles !== undefined) {
        return (route.meta.roles as string[]).includes(role);
      }
    });
  }
  return false;
};

export const filterAsyncRoutes = (
  routes: RouteRecordRaw[],
  roles: string[]
) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach(route => {
    const tmp = { ...route } as any;
    if (hasPermission(roles, tmp)) {
      if (tmp.component == 'Layout') {
        tmp.component = Layout;
      } else {
        const component = routeModules[tmp.component] as any;
        if (component) {
          tmp.component = component;
        } else {
          tmp.component = NotFound;
        }
      }
      res.push(tmp);

      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
    }
  });
  return res;
};

const usePermissionStore = defineStore({
  id: 'permission',
  state: (): PermissionState => ({
    routes: [],
    addRoutes: []
  }),
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.addRoutes = routes;
      this.routes = constantRoutes.concat(routes);
    },
    generateRoutes(roles: string[]) {
      return new Promise((resolve, reject) => {
        apiGetlistRoutes()
          .then(response => {
            const asyncRoutes = response.data;
            console.log(asyncRoutes,roles);
            
            const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
            this.setRoutes(accessedRoutes);
            resolve(accessedRoutes);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
});

export default usePermissionStore;
