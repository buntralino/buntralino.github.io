
import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, enSidebar } from './locales/en';

export default hopeTheme({
  hostname: 'https://buntralino.github.io/',
  logo: '/Buntralino@smoll.png',
  repo: 'https://github.com/buntralino/buntralino.github.io/',
  docsRepo: 'https://github.com/buntralino/buntralino.github.io/',
  docsBranch: 'main',
  docsDir: '/docs',
  titleIcon: false,
  darkmode: 'switch',
  iconAssets: 'fontawesome',

  locales: {
    '/': {
      navbar: enNavbar,
      sidebar: enSidebar,
    }
  },

  headerDepth: 2,

  markdown: {
    gfm: true,
    codeTabs: true,
    tabs: true,
    imgLazyload: true,
    sup: true,
    sub: true,
    tasklist: true,
    align: true,
    mermaid: true,
  },

  plugins: {
    search: {
      maxSuggestions: 10,
    },
    readingTime: false
  },
});
