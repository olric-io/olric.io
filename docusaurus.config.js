// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Distributed, in-memory data structure store',
  tagline: 'With Olric, you can instantly create a fast, scalable, shared pool of RAM across a cluster of computers.',
  url: 'https://olric.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'foobar',
  organizationName: 'olric-io', // Usually your GitHub org/user name.
  projectName: 'olric.io', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [{name: 'keywords', content: 'distributed systems, redis, caching, clustering, golang, kubernetes, amazon web services, ec2, storage'}],
      navbar: {
        title: '',
        logo: {
          alt: 'Olric Logo',
          src: 'img/logo.svg', /** Fjord One Reguar 40px*/
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: 'community', label: 'Community', position: 'left'},
          {
            type: 'doc',
            docId: 'overview/intro',
            position: 'left',
            label: 'Download',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/buraksezer/olric',
            label: 'GitHub',
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
                label: 'Tutorial',
                to: '/docs/overview/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ahK7Vjr8We',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/buraksezer/olric',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Burak Sezer. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['go'],
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
