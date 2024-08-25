import {resolve} from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
// interface MyNuxtConfig {
//   swiper: {
//     prefix: string;
//     modules: string[];
//   };
// }
export default defineNuxtConfig({
    ssr: true,
    css: [
        '~/assets/style/globals.css',
        '~/assets/style/colors.css',
        '~/assets/style/fonts.css',
    ],

    devtools: {enabled: false},
    modules: [
        "@nuxt/image",
        'nuxt-swiper'
    ],
    target: "static",
    generate: {
        fallback: true
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                "/200.html"
            ]
        }
    },

    hooks: {
        'pages:extend'(pages) {
            pages.push(
                {
                    name: "catalog-id",
                    path: "/catalog/:pathMatch(.*)*",
                    file: resolve("pages/catalog.vue")
                },
                {
                    name: "category-id",
                    path: "/category/:path",
                    file: resolve("pages/school.vue")
                },
                {
                    name: "product-id",
                    path: "/product/:pathMatch(.*)*",
                    file: resolve("pages/product.vue")
                },
                {
                    name: "blog-path",
                    path: "/blog/:pathMatch(.*)*",
                    file: resolve("pages/blog.vue")
                },
            )
        }
    }

    // swiper: {
    // prefix: 'Swiper', 
    // modules: ['navigation'] 
    // }
})