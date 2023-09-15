import React, { PropsWithChildren } from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import {
  page as stylePage,
  header as styleHeader,
} from "./BasePage.module.css";

interface BasePageProps extends PropsWithChildren {
  pageName: string;
}

const BasePage = ({ pageName, children }: BasePageProps) => (
  <>
    <NavBar />
    <div className={stylePage}>
      <header className={styleHeader}>
        <h1>{pageName}</h1>
      </header>
      <div>{children}</div>
    </div>
    <Footer />
  </>
);

export default BasePage;
