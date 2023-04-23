import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    // 配置构建选项
    build: {
        minify: 'terser',
        sourcemap: true,
        rollupOptions: {
            input: './src/main.js',
            output: {
                dir: './dist',
                name: 'MyApp',
            }
        }
    },
    plugins: [vue(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 配置开发服务器
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
})
