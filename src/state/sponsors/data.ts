import { makeTier, type SponsorsState, type SponsorProps } from "./types";

import logo_ccsd from "../../images/logo_ccsd.png";
import logo_comcast from "../../images/logo_comcast.png";
import logo_haas from "../../images/logo_haas.png";
import logo_ace from "../../images/logo_ace.png";
import logo_fastenal from "../../images/logo_fastenal.png";
import logo_kokoro from "../../images/logo_kokoro.jpg";
import logo_medtronic from "../../images/logo_medtronic.png";
import logo_abacus from "../../images/logo_abacus.png";
import logo_sierrafp from "../../images/logo_sierrafp.svg";
import logo_ula from "../../images/logo_ula.png";
import logo_onlinemetals from "../../images/logo_onlinemetals.png";


//
// Actual data for all of our sponsors
//
const styles = {
  ccsf: { background: "rgb(8, 97, 136)" },
};

const pinkSponsors: SponsorProps[] = [
  { name: "Cherry Creek School District", logo: logo_ccsd, webpage: "https://www.cherrycreekschools.org/" },
  { name: "Comcast", logo: logo_comcast, webpage: "https://corporate.comcast.com/" },
];

const goldSponsors: SponsorProps[] = [
  { name: "Gene Haas Foundation", logo: logo_haas, webpage: "https://ghaasfoundation.org" },
  { name: "Medtronic", logo: logo_medtronic, webpage: "https://www.medtronic.com" },
];

const silverSponsors: SponsorProps[] = [
  { name: "Abacus Cabinetry", logo: logo_abacus, webpage: "https://www.abacuscabinetry.com"},
  { name: "ACE Hardware", logo: logo_ace, description: "Buckley Square", webpage: "https://www.acehardware.com/store-details/17489" },
  { name: "Fastenal", logo: logo_fastenal, webpage: "https://www.fastenal.com" },
];

const bronzeSponsors: SponsorProps[] = [
  { name: "Kokoro", logo: logo_kokoro, webpage: "https://www.kokororestaurants.com/"},
  { name: "Sierra Forest Products", logo: logo_sierrafp, webpage: "https://www.sierrafp.com/"},
  { name: "United Launch Alliance", logo: logo_ula, webpage: "https://www.ulalaunch.com/"},
  { name: "Online Metals", logo: logo_onlinemetals, webpage: "https://www.onlinemetals.com/"},
];
  
const sponsorsData: SponsorsState = {
  tiers: [
    makeTier({ title: "Pink", items: pinkSponsors }),
    makeTier({ title: "Gold", items: goldSponsors }),
    makeTier({ title: "Silver", items: silverSponsors }),
    makeTier({ title: "Bronze", items: bronzeSponsors }),
  ],
};


// Sponsor content is not dynamic, simply need to export values
export { sponsorsData };
