/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/#advanced
 */

module.exports = {
  siteMetadata: {
    title: `APIM Sample portal`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `API Portal sample description`,
  },
  pathPrefix: `/devportal/landing`,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "scenarios",
        path: `${__dirname}/src/resources/markdown/scenarios/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "landing",
        path: `${__dirname}/src/resources/markdown/landing/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/components/utils/typography`,
      },
    },
    `gatsby-plugin-material-ui`,
  ],
}
