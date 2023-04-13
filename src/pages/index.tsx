import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "../components/App/App";
import "./index.css";
import NavBar from "../components/NavBar/navBar";

const IndexPage = () => (
  <React.StrictMode>
    <App />
    <NavBar />
  </React.StrictMode>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
