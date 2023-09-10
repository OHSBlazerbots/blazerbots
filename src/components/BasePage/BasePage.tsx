import React, { PropsWithChildren } from "react";
import NavBar from "../NavBar/navBar";
import {
  page as stylePage,
  header as styleHeader,
} from "./BasePage.module.css";

interface BasePageProps extends PropsWithChildren {
  pageName: string;
}

const BasePage = ({ pageName, children }: BasePageProps) => (
  <div>
    <NavBar />
    <header className={styleHeader}>
      <h1>{pageName}</h1>
    </header>
    <div className={stylePage}>{children}</div>
  </div>
);

export default BasePage;
