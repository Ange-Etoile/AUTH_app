// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/supabase'],
  supabase: {
    url: process.env.SUPABASE_URL, 
    key: process.env.SUPABASE_KEY, 
    redirect:true
  },
    // runtimeConfig: {
    //     public: {
    //         supabaseUrl: process.env.SUPABASE_URL,
    //         supabaseKey: process.env.SUPABASE_KEY
    //     }
    // }
    runtimeConfig:{
      public:{
        apiUrl:'https://mock-api.binaryboxtuts.com',
        apiKey:'binarybox_api_key_VzO8M31mfzUAW58MBuDkyVX68IWufWJWW7m5BqqSi3FSXHHwKeHjuXQzOC7QdACzffplQ93npFb6Q3sMQLeImXxkz3IHQDkWy1yt'
      }
    },
  
})