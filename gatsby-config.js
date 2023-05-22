module.exports = {
  siteMetadata: {
    title: 'Kubernetes Training',
    description: 'Kubernetes Training',
    keywords: 'ibm,watson,aiops,waiops',
  },
  pathPrefix: `/cp4waiops-training`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: 'src/images/favicon.svg',
        theme: {
          homepage: 'dark',
          interior: 'g10',
        },
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/niklaushirt/cp4waiops-training',
          subDirectory: '/',
        },
        isSwitcherEnabled: 'false',
      },
    },
  ],
};
