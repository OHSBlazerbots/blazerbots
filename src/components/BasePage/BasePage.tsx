import React, { PropsWithChildren } from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import {
  pageContainer as stylePageContainer,
  pageArticle as stylePageArticle,
  header as styleHeader,
} from "./BasePage.module.css";

interface BasePageProps extends PropsWithChildren {
  pageName: string;
}

const BasePage = ({ pageName, children }: BasePageProps) => (
  <div className={stylePageContainer}>
    <NavBar />
    <article className={stylePageArticle}>
      <header className={styleHeader}>
        <h1>{pageName}</h1>
      </header>
      <div>{children}</div>
    </article>
    <Footer />
  </div>
);

export default BasePage;
