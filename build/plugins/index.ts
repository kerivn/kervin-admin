/*
 * @Author: kervin
 * @LastEditTime: 2023-01-07 14:34:06
 * @FilePath: \kervin-admin\build\plugins\indes.ts
 * @Description: vite插件较多放在这里统一配置
 */

import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configImportPlugin } from './autoImport'

export function createVitePlugins() {
    const vitePlugins: (Plugin | Plugin[])[] = [vue(), configImportPlugin()]

    return vitePlugins
}
