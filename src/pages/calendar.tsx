import React from "react";
import { HeadFC } from "gatsby";

import { BasePage, SEO } from "../components";

const calendarUrl="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ff007f&ctz=America%2FDenver&title=Blazer%20Bots%20Calendar&src=bDhlajBrc2R1OTN0ZmRsZGJhdDB2MWMycjEzODQ0Y3RAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=b2hzYmxhemVyYm90c0BnbWFpbC5jb20&color=%23E67C73&color=%23D50000"

const calendarstyle= {
  border: "solid 1px #7",
  height: "600px"
}

const title = "Calendar";

const page = () => (
  <BasePage pageName={title}>
    <iframe src={calendarUrl} style={calendarstyle} width="100%" frameBorder="0" scrolling="no" /></BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
