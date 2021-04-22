/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `HIGHBS-BOK, le livre du motif absolu`,
    siteUrl: `https://highbs-bok.art`,
    description: `Découvrez les secrets de l'HIGHBS, le motif absolu,
      à travers l'histoire des ZUMS : ces singes conquérants,
      partis jusqu'aux confins de l'univers et
      revenus pour former le tout-un.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
