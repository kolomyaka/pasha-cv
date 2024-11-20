import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import {defineConfig} from "vite";
import { resolve } from 'path'

export default defineConfig(() => {
    return {
        build: {
            outDir: './dist',
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    cases: resolve(__dirname, 'cases.html')
                }
            }
        },
        // needed for github pages just put the repo name here
        base: 'pasha-cv',
        plugins: [
            ViteImageOptimizer({
                /* pass your config */
            }),
        ],
    };
});
