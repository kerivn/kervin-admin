/*
 * @Author: kervin
 * @LastEditTime: 2022-11-17 11:55:43
 * @FilePath: \k-admin\build\plugins\index.ts
 * @Description: vite插件较多放在这里统一配置
 */

import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configImportPlugin } from './autoImport';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const { VITE_USE_MOCK } = viteEnv;
    console.log(VITE_USE_MOCK, isBuild);

    const vitePlugins: (Plugin | Plugin[])[] = [
        vue(),
        configImportPlugin(),
        configMockPlugin(isBuild),
    ];

    return vitePlugins;
}
