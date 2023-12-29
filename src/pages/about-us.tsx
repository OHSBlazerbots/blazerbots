import React from "react";
import { HeadFC } from "gatsby";

import { BasePage, SEO } from "../components";

const title = "About Us";

const page = () => (
  <BasePage pageName={title}>Welcome to the about us page!</BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
