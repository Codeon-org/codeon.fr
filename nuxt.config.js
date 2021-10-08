export default {
  target: "static",
  // router: {
  //   base: "/codeon.fr/",
  // },

  generate: {
    fallback: true,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Robin from Codeon 👋",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  styleResources: {
    scss: [
      "@/assets/scss/variables.scss",
      "@/assets/scss/fonts.scss",
      "@/assets/scss/media-query.scss",
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/reset.scss", "@/assets/scss/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/eva-icons" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/pwa",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/pwa", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // PWA : https://pwa.nuxtjs.org/setup
  pwa: {},
};
