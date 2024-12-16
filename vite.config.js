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
                    cases: resolve(__dirname, 'cases.html'),
                    instories: resolve(__dirname, 'instories.html'),
                    sber: resolve(__dirname, 'sber.html'),
                    sibur: resolve(__dirname, 'sibur.html'),
                    rostelecom: resolve(__dirname, 'rostelecom.html'),
                    design: resolve(__dirname, 'design.html'),
                    about: resolve(__dirname, 'about.html'),
                }
            }
        },
        // needed for github pages just put the repo name here
        base: 'pasha-cv',
        plugins: [
            // ViteImageOptimizer({
            //     exclude: ['**/*.gif'],
            //     /* pass your config */
            // }),
        ],
    };
});
