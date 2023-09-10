import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import BasePage from "../components/BasePage/BasePage";

const page = () => (
  <BasePage pageName="Index">Welcome to the index page!</BasePage>
);

export default page;

export const Head: HeadFC = () => <title>Home Page</title>;
