import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import path from 'path';

import theme from './theme';

export default defineUserConfig({
  lang: 'en-US',

  title: 'Buntralino',
  description: 'Make better, faster cross-platform desktop apps without the bloat of Chrome while still keeping the comfort of node.js development',

  head: [
    ['link', { rel: 'icon', href: '/Buntralino.png' }],
  ],

  theme,

  alias: {
    '@theme/VPHomeHero.vue': path.resolve(
      __dirname,
      './components/VPHomeHero.vue',
    ),
  },

  bundler: viteBundler(),
})
