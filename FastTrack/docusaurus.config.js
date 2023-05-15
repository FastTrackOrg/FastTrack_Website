/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'FastTrack',
  tagline: 'This is the official website of FastTrack, the free tracking software. Targeting scientists, FastTrack focuses on easy and fast objects tracking from video recordings. With easy installation, intuitive interface FastTrack is the tool of choice for every scientist.',
  url: 'https://www.fasttrack.sh',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FastTrackOrg',
  projectName: 'FastTrack',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    announcementBar: {
        id: 'support_us',
        content: '<b><span style="color:red;">❤</span> If you like FastTrack, give it a star on <a href="https://github.com/FastTrackOrg/FastTrack">GitHub</a> or <a href="https://ko-fi.com/bgallois">support the project</a>!</b> ',
        backgroundColor: '#ff91e0',
        textColor: '#091e42',
        isCloseable: false,
    },
    navbar: {
      title: 'FastTrack',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'User Manual',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Manual',
              to: '/docs/intro',
            },
            {
              label: 'Developer Manual',
              to: 'https://fasttrack.sh/API/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/FastTrackOrg',
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
              href: 'https://github.com/FastTrackOrg/FastTrack',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FastTrackOrg, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: function ({
            locale,
            version,
            versionDocsDirPath,
            docPath,
            permalink,
          }) {
            return `https://github.com/FastTrackOrg/FastTrack/tree/master/docs/user/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
    scripts: [
      'https://fasttrack.sh/download/matomo.js',
  ],
};
