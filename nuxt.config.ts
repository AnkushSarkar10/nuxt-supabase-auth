// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
    tailwindcss: {},
    css: ["~/assets/css/main.css"],
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
});
