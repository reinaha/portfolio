import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    if (command === 'serve') {
        return {
            plugins: [react()],
            build: {
                outDir: './build',
            },
        };
    }

    return {
        plugins: [react()],
        base: '/portfolio/',
        build: {
            outDir: './build',
        },
    };
});
