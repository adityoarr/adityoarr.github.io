// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxtjs/google-fonts", "nuxt-aos"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  googleFonts: {
    families: {
      "Dancing+Script": true,
      Platypi: true,
      "Bad+Script": true,
    },
  },
  css: ["~/assets/css/main.css", "animate.css"],
});