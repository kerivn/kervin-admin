/*
 * @Author: kervin
 * @LastEditTime: 2023-01-10 15:57:37
 * @FilePath: \kervin-admin\build\plugins\index.ts
 * @Description: vite插件较多放在这里统一配置
 */

import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configImportPlugin } from './autoImport'

export function createVitePlugins() {
    const vitePlugins: (Plugin | Plugin[])[] = [vue(), configImportPlugin()]

    return vitePlugins
}
