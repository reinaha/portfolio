import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    if (command === 'serve') {
        return {
            plugins: [react()],
            build: {
                outDir: './build',
            },
            publicDir: 'public',
            resolve: {
                alias: [
                    { find: '@resources', replacement: './resources/' },
                    { find: '@', replacement: path.resolve(__dirname, './src') },
                ],
            },
        };
    }

    return {
        plugins: [react()],
        base: '/portfolio/',
        build: {
            outDir: './build',
        },
        publicDir: 'public',
        resolve: {
            alias: [
                { find: '@resources', replacement: './resources/' },
                { find: '@', replacement: path.resolve(__dirname, './src') },
            ],
        },
    };
});
