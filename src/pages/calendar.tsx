import React from "react";
import BasePage from "../components/BasePage/BasePage";
const calendarUrl="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ff007f&ctz=America%2FDenver&title=Blazer%20Bots%20Calendar&src=bDhlajBrc2R1OTN0ZmRsZGJhdDB2MWMycjEzODQ0Y3RAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=b2hzYmxhemVyYm90c0BnbWFpbC5jb20&color=%23E67C73&color=%23D50000"
const page = () => (
  <BasePage pageName="Calendar">
    <iframe src={calendarUrl} style={"border:solid 1px #777"} width="800" height="600" frameborder="0" scrolling="no"></iframe>!</BasePage>
);

export default page;
