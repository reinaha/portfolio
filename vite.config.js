import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var command = _a.command,
        mode = _a.mode;
    if (command === 'serve') {
        return {
            plugins: [react()],
            build: {
                outDir: './build',
            },
            publicDir: 'public',
            resolve: {
                alias: [
                    {
                        find: '@resources',
                        replacement: path.resolve(__dirname, './resources'),
                    },
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
                {
                    find: '@resources',
                    replacement: path.resolve(__dirname, './resources'),
                },
                { find: '@', replacement: path.resolve(__dirname, './src') },
            ],
        },
    };
});
