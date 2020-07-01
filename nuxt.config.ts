import { Configuration } from '@nuxt/types';
import { ProvidePlugin, NormalModuleReplacementPlugin } from 'webpack';

const config: Configuration = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/style/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/helpers.ts',
    '@/plugins/unfocus.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha'
  ],
  /**
   * Recaptcha Options
   */
  recaptcha: {
    hideBadge: false,
    siteKey: '6Les9asZAAAAANDtLTCD5St3zAZKKoqHqSnF9W33',
    version: 2,
    size: 'invisible'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (process.env.NODE_ENV == 'production') {
				config.plugins!.push( new NormalModuleReplacementPlugin(
					/environment\/defaults\.json/,
					'@/environment/defaults.prod.json'
				));
			}
    },
    plugins: [
      new ProvidePlugin({
          '_': 'lodash'
      })
    ]
  }
}

export default config;
