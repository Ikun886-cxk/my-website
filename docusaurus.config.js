// @ts-check
const path = require('path')
const announcementBarContent = `基于 <a href='https://v3.nuxtjs.org/'>Nuxt3</a> 实现 <a href='https://api.kuizuo.cn'>KZ API</a> 接口站点`

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DragonJayのwiki',
  tagline: '-',
  url: 'https://furrysp.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DragonJay', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
	localeConfigs: {
	      en: {
	        htmlLang: 'en-GB',
	      },
		},  
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SurpriseLon/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SurpriseLon/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'DragonJayのwiki',
        logo: {
          alt: 'DragonJayのwiki',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
            {to: '/docs/game', label: '游戏', position: 'left'},
            {
              href: 'https://t.me/+frQMWqK0suc0OGZl',
              className: 'header-Telegram-link',
              'aria-label': 'Telegram',
              position: 'right',
            },
        {
              href: 'https://github.com/SurpriseLon/docs',
              className: 'header-github-link',
              'aria-label': 'GitHub',
              position: 'right',
            },
		  ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '游戏',
                to: '/docs/game',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/DragonJayCN',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+frQMWqK0suc0OGZl',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SurpriseLon/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DragonJay's wiki, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {}
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
    }),
	 plugins: [
	    async function myPlugin(context, options) {
	      return {
	        name: "docusaurus-tailwindcss",
	        configurePostCss(postcssOptions) {
	          // Appends TailwindCSS and AutoPrefixer.
	          postcssOptions.plugins.push(require("tailwindcss"));
	          postcssOptions.plugins.push(require("autoprefixer"));
	          return postcssOptions;
	        },
	      };
	    },
	  ],
};

module.exports = {
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;

