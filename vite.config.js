import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import {defineConfig} from "vite";

export default defineConfig(() => {
    return {
        build: { outDir: './' },
        // needed for github pages just put the repo name here
        base: 'pasha-cv',
        plugins: [
            ViteImageOptimizer({
                /* pass your config */
            }),
        ],
    };
});
