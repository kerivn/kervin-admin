import { createRouter, createWebHistory } from 'vue-router';
import { constantRoutes } from './basic';
const modules = import.meta.glob('./modules/*.ts', { eager: true });
function formatModules(modules: any): Record<string, { [key: string]: any }> {
    const result: Record< string, {[key: string]: any; } > = {};
    Object.keys(modules).forEach((key) => {
        const defaultModule = modules[key].default;
        if (!defaultModule) return;
        Object.keys(defaultModule).forEach((item) => {
            if (!Object.prototype.hasOwnProperty.call(result, item)) {
                result[item] = defaultModule[item];
            }
        });
    });
    return result;
}

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: constantRoutes,
});
export const routeModules = formatModules(modules);
console.log('routeModules',routeModules);

export default router;
