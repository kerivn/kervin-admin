/** @type {import('vite').UserConfig} */

import { defineConfig, loadEnv, UserConfig, ConfigEnv } from 'vite'
import * as path from 'path'
import { createVitePlugins } from './build/plugins/index'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
    // 环境配置文件目录 默认 process.cwd() 根目录
    const envDir = './build/env'
    // 根据当前工作目录中的 `mode` 加载 .env 文件  设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, envDir)
    // 在开发环境下 command 的值为 serve（在 CLI 中， vite dev 和 vite serve 是 vite 的别名），而在生产环境下为 build（vite build）
    const isBuild = command === 'build'

    return {
        envDir: envDir,
        plugins: createVitePlugins(),
        resolve: {
            //设置别名
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '#': path.resolve(__dirname, 'types'),
                '@build': path.resolve(__dirname, 'build'),
            },
        },
        server: {
            port: 8080, //启动端口
            hmr: {
                host: '127.0.0.1',
                port: 8080,
            },
            proxy: {
                '/apiproxy': {
                    target: 'your https address',
                    changeOrigin: true,
                    rewrite: (path: string) => path.replace(/^\/api/, ''),
                },
            },
        },
    }
})
