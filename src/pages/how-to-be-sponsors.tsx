import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import BasePage from "../components/BasePage/BasePage";

const title = "Become a Sponsor"

const style = {
  "width": "50%",
  "margin-left": "auto",
  "margin-right": "auto",
}

const bronze = {
  "color": "#cd7f32",
  "font-weight": "bold"
};

const silver = {
  "color": "#c0c0c0",
  "font-weight": "bold"
};

const gold = {
  "color": "#ffd700",
  "font-weight": "bold"
};

const pink = {
  "color": "#FF007f",
  "font-weight": "bold"
};

const page = () => (
  <BasePage pageName={title}>
    <div style={style}>
      <p>Do you own, work for, or know a business that would like to support our program and receive advertisement opportunities in return?</p>
      <p>
        We're always seeking funding and sponsors to support our budget, which was grown to nearly $20,000 per year.
        We offer four tiers of sponsorship: <span style={bronze}>Bronze</span>, <span style={silver}>Silver</span>, <span style={gold}>Gold</span>, and <span style={pink}>Pink</span>. Each offers logo placement with increasing visibility, starting with our website for Bronze and culminating in a large logo on our competition robot.
        See our sponsorship packet below for details!
      </p>
      <p>Contact Sam Goldman at <a href="mailto:sgoldman@cherrycreekschools.org?subject=BlazerBots Sponsorship Inquiry">sgoldman@cherrycreekschools.org</a> with any questions or to get started.</p>

      <p>We look forward to working with you and to seeing your logo on our robot!</p>
    </div>
    <iframe src="https://drive.google.com/file/d/1zJ_RThOwgtSONbEUVSGEswerpjsNMbjc/preview" width="640" height="480"></iframe>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <title>{title}</title>;
