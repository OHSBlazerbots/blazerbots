import React from "react";
import BasePage from "../components/BasePage/BasePage";
import SponsorSection from "../components/SponsorSection/sponsorSection";
import { sponsorsData } from "../state/sponsors/data";

const page = () => (
  <BasePage pageName="Current Sponsors">
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
