/*
 * @Author: kervin
 * @LastEditTime: 2023-01-10 14:26:07
 * @FilePath: \kervin-admin\build\plugins\index.ts
 * @Description: vite插件较多放在这里统一配置
 */

import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteStylelint from 'vite-plugin-stylelint'
import { configImportPlugin } from './autoImport'

export function createVitePlugins() {
    const vitePlugins: (Plugin | Plugin[])[] = [
        vue(),
        viteStylelint(),
        configImportPlugin(),
    ]

    return vitePlugins
}
