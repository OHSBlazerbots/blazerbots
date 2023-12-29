import React, { PropsWithChildren } from "react";
import { NavBar, Footer } from "..";
import {
  pageContainer as stylePageContainer,
  pageArticle as stylePageArticle,
  header as styleHeader,
} from "./BasePage.module.css";

interface BasePageProps extends PropsWithChildren {
  pageName?: string;
  articleWidth?: string;
}

const BasePage = ({ pageName, articleWidth, children }: BasePageProps) => (
  <div className={stylePageContainer}>
    <NavBar />
    <article
      className={stylePageArticle}
      style={articleWidth ? { width: articleWidth } : {}}
    >
      {/* Include header elements only if there is a non-empty pageName */}
      {pageName ? (
        <header className={styleHeader}>
          <h1>{pageName}</h1>
        </header>
      ) : (
        <></>
      )}
      <div>{children}</div>
    </article>
    <Footer />
  </div>
);

export { BasePage };
