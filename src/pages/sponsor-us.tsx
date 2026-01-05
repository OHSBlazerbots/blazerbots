import * as React from "react";
import type { HeadFC } from "gatsby";

import { BasePage, SEO } from "../components";
import { SponsorTiers } from "../components/constants";

const title = "Become a Sponsor"
const sponsorPacketUrl = "https://drive.google.com/file/d/1zJ_RThOwgtSONbEUVSGEswerpjsNMbjc/preview";

const style = {
  margin: "auto",
};

const makeSponsorTierText = (tier: keyof typeof SponsorTiers) => {
  // Lookup color associated with sponsorship tier
  const tierColor = SponsorTiers[tier].color
  
  const tierStyle = {
    color: tierColor,
    fontWeight: "bold"
  };

  return (
    <span style={tierStyle}>{tier}</span>
  )
}


const pdfContainerStyle = {
  aspectRatio: "8.5/11",
  width: "80%",
  margin: "auto",
};

const page = () => (
  <BasePage pageName={title}>
    <div style={style}>
      <p>Do you own, work for, or know a business that would like to support our program and receive advertisement opportunities in return?</p>
      <p>
        We're always seeking funding and sponsors to support our budget, which has grown to nearly $20,000 per year.
        We offer four tiers of sponsorship: {makeSponsorTierText("Bronze")}, {makeSponsorTierText("Silver")}, {makeSponsorTierText("Gold")}, and {makeSponsorTierText("Pink")}. Each offers logo placement with increasing visibility, starting with our website for Bronze and culminating in a large logo on our competition robot.
        See our sponsorship packet below for details!
      </p>
      <p>Contact Sam Goldman at <a href="mailto:sgoldman@cherrycreekschools.org?subject=BlazerBots Sponsorship Inquiry">sgoldman@cherrycreekschools.org</a> with any questions or to get started.</p>

      <p>We look forward to working with you and to seeing your logo on our robot!</p>
    </div>
    <iframe src={sponsorPacketUrl} style={pdfContainerStyle}/>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
