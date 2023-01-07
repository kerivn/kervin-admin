import { defineConfig } from 'vite'
import * as path from 'path'
import { createVitePlugins } from './build/plugins/index'

// https://vitejs.dev/config/
export default defineConfig({
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
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
})
