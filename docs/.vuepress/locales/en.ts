import { navbar, sidebar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
  {
    text: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    text: 'Docs',
    link: '/cli',
    icon: 'book',
  },
  {
    text: 'Neutralino.js API',
    link: 'https://neutralino.js.org/docs/api/overview',
    icon: 'book',
  },
  {
    text: 'Discord',
    link: 'https://comigo.games/btdiscord',
    icon: 'user-group',
  }
]);

export const enSidebar = sidebar([
  {
    link: '/',
    text: 'Home',
    icon: 'home',
  },
  'get-started',
  'architecture',
  'cli',
  'cli-api',
  'bun-api',
  'client-api',
  'safari-gotchas'
]);
