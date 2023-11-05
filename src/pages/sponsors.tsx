import React from "react";
import BasePage from "../components/BasePage/BasePage";
import SponsorSection from "../components/SponsorSection/sponsorSection";
import Sponsor from "../components/Sponsor/sponsor";
import logo_ccsd from "../images/logo_ccsd.png";
import logo_comcast from "../images/logo_comcast.png";
import logo_haas from "../images/logo_haas.png";
import logo_ccsf from "../images/logo_ccsf.png";
import logo_anglebotics from "../images/logo_anglebotics.svg";
import logo_ace from "../images/logo_ace.png";
import logo_fastenal from "../images/logo_fastenal.png";
import logo_brothers from "../images/logo_brothers.svg";
import logo_harbor_freight from "../images/logo_harbor_freight.svg";

const styles = {
  anglebots: {
      background: 'red'
  }
};

const page = () => (
  <BasePage pageName="Current Sponsors">
    <SponsorSection title="Pink" color="#FF007f">
      <Sponsor name="Cherry Creek School District" logo={logo_ccsd}></Sponsor>
      <Sponsor name="Comcast" logo={logo_comcast}></Sponsor>
      <Sponsor name="Gene Haas Foundation" logo={logo_haas}></Sponsor>
      <Sponsor name="Cherry Creek Schools Foundation" logo={logo_ccsf}></Sponsor>
      <Sponsor name="Anglebotics" logo={logo_anglebotics} style={styles.anglebots}></Sponsor>
      <Sponsor name="ACE Hardware" logo={logo_ace}></Sponsor>
      <Sponsor name="Fastenal" logo={logo_fastenal}></Sponsor>
      <Sponsor name="Brothers" logo={logo_brothers}></Sponsor>
    </SponsorSection>
    {/* <SponsorSection title="Gold" color="#ffd700"></SponsorSection> */}
    <SponsorSection title="Silver" color="#c0c0c0"></SponsorSection>
      <Sponsor name="Harbor Freight Tools" logo={logo_harbor_freight}></Sponsor>
    {/* <SponsorSection title="Bronze" color="#cd7f32"></SponsorSection> */}
    <div>
      <br />
      <br />
      <br />
      <br />
    </div>
  </BasePage>
);

export default page;
