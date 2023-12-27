import React from "react";
import { HeadFC } from "gatsby";

import BasePage from "../components/BasePage/BasePage";
import { SEO } from "../components/SEO/seo";

const title = "About Us";

const page = () => (
  <BasePage pageName={title}>Welcome to the about us page!</BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
