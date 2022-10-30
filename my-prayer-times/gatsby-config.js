module.exports = {
  siteMetadata: {
    title: `My Prayer Times`,
    author: '@abdihashii',
    siteUrl: `https://www.myprayertimes.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '\u0016',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'My Prayer Times',
        short_name: 'My Prayer Times',
        start_url: '/',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'sans-serif'],
        },
      },
    },
    `gatsby-plugin-sass`,
  ],
};
