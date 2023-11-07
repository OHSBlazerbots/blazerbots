import React from "react";
import BasePage from "../components/BasePage/BasePage";
import SponsorSection from "../components/SponsorSection/sponsorSection";
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

const pinkSponsors = [
  {name:"Cherry Creek School District", logo:logo_ccsd},
  {name:"Comcast", logo:logo_comcast},
  {name:"Gene Haas Foundation", logo:logo_haas},
  {name:"Cherry Creek Schools Foundation", logo:logo_ccsf},
  {name:"Anglebotics", logo:logo_anglebotics, style: styles.anglebots},
  {name:"ACE Hardware", logo:logo_ace},
  {name:"Fastenal", logo:logo_fastenal},
  {name:"Brothers", logo:logo_brothers},
]

const silverSponsors = [
  {name:"Harbor Freight Tools", logo:logo_harbor_freight},
]

const page = () => (
  <BasePage pageName="Current Sponsors">
    <SponsorSection title="Pink" items={pinkSponsors} color="#FF007f" />
    {/* <SponsorSection title="Gold" color="#ffd700"></SponsorSection> */}
    <SponsorSection title="Silver" items={silverSponsors} color="#c0c0c0" />
    {/* <SponsorSection title="Bronze" color="#cd7f32"></SponsorSection> */}
  </BasePage>
);

export default page;
