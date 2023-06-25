import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./sponsors";
import NavBar from "../components/NavBar/navBar";

const IndexPage = () => (
  <div>
    <NavBar />
    <header>
      <h1> Welcome to the index page!</h1>
    </header>
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
