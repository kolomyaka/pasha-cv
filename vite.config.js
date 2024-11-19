import viteImagemin from 'vite-plugin-imagemin'
import imageminWebp from "imagemin-webp";

export default () => {
    return {
        plugins: [
            viteImagemin({
                gifsicle: {
                    optimizationLevel: 7,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                mozjpeg: {
                    quality: 20,
                },
                pngquant: {
                    quality: [0.1, 0.2],
                    speed: 0,
                    level: 7
                },
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false,
                        },
                    ],
                },
                webp: imageminWebp({
                    quality: 50,
                }),
            }),
        ],
    }
}
