import { defineConfig, loadEnv, UserConfig, ConfigEnv } from 'vite';
import path from 'path';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
    // 环境配置文件目录 默认 process.cwd() 根目录
    const envDir = './build/viteEnv';
    // 根据当前工作目录中的 `mode` 加载 .env 文件  设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, envDir);
    // The boolean type read by loadEnv is a string. This function can be converted to boolean type
    const viteEnv = wrapperEnv(env);
    // 在开发环境下 command 的值为 serve（在 CLI 中， vite dev 和 vite serve 是 vite 的别名），而在生产环境下为 build（vite build）
    const isBuild = command === 'build';
    return {
        envDir: envDir,
        plugins: createVitePlugins(viteEnv, isBuild),
        server: {
            host: '0.0.0.0',
            port: Number(env.VITE_APP_PORT),
            open: false, // 运行自动打开浏览器
        },
        resolve: {
            alias: {
                '@': path.resolve('./src'),
                '#': path.resolve('./types'),
            },
        },
    };
});
