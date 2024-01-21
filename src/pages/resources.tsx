import React from "react";
import { HeadFC } from "gatsby";

import { BasePage, SEO } from "../components";

const title = "Resources";

const page = () => (
  <BasePage pageName={title}>Welcome to the resources page!</BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
