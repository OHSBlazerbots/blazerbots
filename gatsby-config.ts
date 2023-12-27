import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Overland BlazerBots FRC Team 3807`,
    description: "The official website of FRC Team 3807, the Overland BlazerBots",
    siteUrl: `https://www.blazerbots.org`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Overland BlazerBots FRC Team 3807",
        short_name: "BlazerBots",
        start_url: "/",
        background_color: "#ff007f",
        theme_color: "#ff007f",
        display: "standalone",
        icon: "src/images/logo.svg", // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
