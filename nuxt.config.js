import fr from "./i18n/fr";
import en from "./i18n/en";

export default {
  target: "static",

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Robin from Codeon 👋 - Software Engineer",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "twitter:widgets:new-embed-design", content: "on" },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#FFD369" },
      {
        name: "robots",
        content:
          "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://codeon.fr/og_image.png",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@MrAnyx",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Codeon",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:image:src",
        name: "twitter:image:src",
        content: "https://codeon.fr/og_image.png",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://codeon.fr/og_image.png",
      },

      // ----------------------------------

      {
        hid: "description",
        name: "description",
        content:
          "I'm a french software engineer specialized in fullstack web developer. Well, I'm also a UI designer in my spare time",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "I'm a french software engineer specialized in fullstack web developer. Well, I'm also a UI designer in my spare time",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Robin from Codeon 👋 - Software Engineer",
      },

      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Robin from Codeon 👋 - Software Engineer",
      },
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
  modules: ["@nuxtjs/style-resources", "@nuxtjs/pwa", "@nuxtjs/i18n"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [],
  },

  // PWA : https://pwa.nuxtjs.org/setup
  pwa: {},

  // I18n : https://i18n.nuxtjs.org/setup
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
    },
    vueI18n: {
      fallbackLocale: "fr",
      messages: {
        en,
        fr,
      },
    },
  },
};
