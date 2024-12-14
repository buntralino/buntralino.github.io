import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Buntralino (Work in Progress...)',
  description: 'Make better, faster cross-platform desktop apps without the bloat of Chrome while still keeping the comfort of node.js development',

  theme: defaultTheme({
    logo: '/Buntralino@smoll.png',
    navbar: ['/'],
    colorMode: 'dark'
  }),
  alias: {
    '@theme/VPHomeHero.vue': path.resolve(
      __dirname,
      './components/VPHomeHero.vue',
    ),
  },

  bundler: viteBundler(),
})
