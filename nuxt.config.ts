/* 
See: https://nuxt.com/docs/api/configuration/nuxt-config
Notes: 
- Use `whitespace-pre-wrap` tailwind class to make \n in the translation strings work 
- Not sure if `fallbackLocale` element is necessary since we already specify `defaultLocale` in nuxt.config.js
*/

import { CANONICAL_URL, GITHUB_SUB_URL } from "./utils/constants" 

export default defineNuxtConfig({

  // Make the site static. See https://stackoverflow.com/questions/74070241/what-is-the-difference-between-ssrfalse-vs-targetstatic-in-nuxtjs
  // target: 'static', // Only on nuxt 2 I think. On nuxt 3 you use the generate script
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],

  app: {
    baseURL: '/', // GITHUB_SUB_URL,
    head: {
      title: '',
      meta: [
        { name: 'description', content: '' }
      ],
    }
  },
  
  i18n: {
    langDir: './locales/',
    locales: [
      { code: 'en-US', iso: 'en-US', name: '🇬🇧 English', file: 'en-US.js', dir: 'ltr' },
      { code: 'de-DE', iso: 'de-DE', name: '🇩🇪 Deutsch', file: 'de-DE.js', dir: 'ltr' },
    ],
    defaultLocale: 'en-US',
    vueI18n: './i18n.config.ts',
    compilation: {
      strictMessage: false, // Allow HTML in localization files.
    },
    strategy: 'prefix_except_default', //'prefix',
    detectBrowserLanguage: { /* Not sure what we're doing here */
      useCookie: true, // If true, non-english users will only be redirected the first time IIUC - only set false for testing
      cookieKey: 'i18n_redirected',
      redirectOn: 'no prefix', // 'root' is allegedly better than 'no prefix' for SEO or sth
    },
  },
})
