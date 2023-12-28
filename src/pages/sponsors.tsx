import React from "react";
import { HeadFC } from "gatsby";

import BasePage from "../components/BasePage/BasePage";
import { SEO } from "../components/SEO/seo";
import SponsorSection from "../components/SponsorSection/sponsorSection";
import { sponsorsData } from "../state/sponsors/data";

const title = "Current Sponsors"

const page = () => (
  <BasePage pageName={title}>
    {sponsorsData.tiers
      // Exclude tiers that don't have any sponsors yet
      .filter((tier) => tier.items.length > 0)
      // For each tier, create a section
      .map((tier, idx) => (
        <SponsorSection {...tier} key={idx} />
      ))}
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
