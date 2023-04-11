import * as React from "react";
import type { HeadFC } from "gatsby";
import App from "../components/App/App";
import "./index.css";

const IndexPage = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
