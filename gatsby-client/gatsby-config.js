require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `My Prayer Times`,
    description:
      'Get accurate, reliable Islamic prayer times for your current location with our easy-to-use website. Never miss your daily salah again with our reliable prayer time calculator. Start getting your prayer times today and stay on track with your daily salah!',
    author: '@abdihashii',
    siteUrl: `https://myprayertimes.com/`,
    social: {
      twitter: `@myprayertimes`,
    },
  },
  trailingSlash: 'never',
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://myprayertimes.com/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: false,
        host: 'myprayertimes.com', // if 'www' is set to 'false', be sure to also remove it here!
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_PROPERTY_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    'gatsby-plugin-image',
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:200,400,500,600,700`],
        display: 'swap',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://myprayertimes.com/',
        sitemap: 'https://myprayertimes.com/sitemap-0.xml/',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
        enableTags: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    `gatsby-plugin-preload-fonts`,
  ],
};
