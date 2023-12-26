import { makeTier, SponsorsState } from "./types";

import logo_ccsd from "../../images/logo_ccsd.png";
import logo_comcast from "../../images/logo_comcast.png";
import logo_haas from "../../images/logo_haas.png";
import logo_ccsf from "../../images/logo_ccsf.png";
import logo_angelbotics from "../../images/logo_angelbotics.svg";
import logo_ace from "../../images/logo_ace.png";
import logo_fastenal from "../../images/logo_fastenal.png";
import logo_brothers from "../../images/logo_brothers.svg";
import logo_harbor_freight from "../../images/logo_harbor_freight.svg";


//
// Actual data for all of our sponsors
//
const styles = {
  angelbots: { background: "red" },
  ccsf: { background: "rgb(8, 97, 136)" },
};

const pinkSponsors = [
  { name: "Cherry Creek School District", logo: logo_ccsd },
  { name: "Comcast", logo: logo_comcast },
  { name: "Gene Haas Foundation", logo: logo_haas },
  { name: "Cherry Creek Schools Foundation", logo: logo_ccsf, style: styles.ccsf },
  { name: "Angelbotics", logo: logo_angelbotics, style: styles.angelbots },
  { name: "ACE Hardware", logo: logo_ace, description: "Buckley Square" },
  { name: "Fastenal", logo: logo_fastenal },
  { name: "Brothers", logo: logo_brothers },
];

const silverSponsors = [
  { name: "Harbor Freight Tools", logo: logo_harbor_freight },
];

const sponsorsData: SponsorsState = {
  tiers: [
    makeTier({ title: "Pink", items: pinkSponsors }),
    makeTier({ title: "Gold", items: [] }),
    makeTier({ title: "Silver", items: silverSponsors }),
    makeTier({ title: "Bronze", items: [] }),
  ],
};


// Sponsor content is not dynamic, simply need to export values
export { sponsorsData };
