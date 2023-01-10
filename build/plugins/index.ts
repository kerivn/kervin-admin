/*
 * @Author: kervin
 * @LastEditTime: 2023-01-10 17:09:54
 * @FilePath: \kervin-admin\build\plugins\index.ts
 * @Description: vite插件较多放在这里统一配置
 */

import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configImportPlugin } from './autoImport'
import { configMockPlugin } from './mock'
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const { VITE_USE_MOCK } = viteEnv

    const vitePlugins: (Plugin | Plugin[])[] = [vue(), configImportPlugin()]

    // vite-plugin-mock
    VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

    return vitePlugins
}
