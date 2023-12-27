// Based on Gatsby docs
// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component

import React, { PropsWithChildren } from "react";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

interface SEOProps extends PropsWithChildren {
  title?: string;
  description?: string;
}

const SEO = ({ title, description, children }: SEOProps) => {
  // Query default values
  const {
    title: defaultTitle,
    description: defaultDescription,
  } = useSiteMetadata();

  // Object to represent page SEO attributes (use defaults if not provided)
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

export { SEO };
