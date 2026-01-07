import { makeTier, type SponsorsState, type SponsorProps } from "./types";

import logo_ccsd from "../../images/logo_ccsd.png";
import logo_comcast from "../../images/logo_comcast.png";
import logo_haas from "../../images/logo_haas.png";
import logo_ace from "../../images/logo_ace.png";
import logo_fastenal from "../../images/logo_fastenal.png";
import logo_kokoro from "../../images/logo_kokoro.jpg";
import logo_medtronic from "../../images/logo_medtronic.png";
import logo_ula from "../../images/logo_ula.png";
import logo_onlinemetals from "../../images/logo_onlinemetals.png";
import logo_merrick from "../../images/logo_merrick.png";
import logo_bae from "../../images/logo_bae.svg";
import logo_yea from "../../images/logo_yea.png";
import logo_te_connectivity from "../../images/logo_te_connectivity.svg";
import logo_campos from "../../images/logo_campos.png";
import logo_fabworks from "../../images/logo_fabworks.png";

//
// Actual data for all of our sponsors
//
const styles = {
  merrick: { background: "#002E6D" },
};

const pinkSponsors: SponsorProps[] = [
  { name: "Cherry Creek School District", logo: logo_ccsd, webpage: "https://www.cherrycreekschools.org/" },
  { name: "Comcast", logo: logo_comcast, webpage: "https://corporate.comcast.com/" },
  { name: "Gene Haas Foundation", logo: logo_haas, webpage: "https://ghaasfoundation.org" },
  { name: "Merrick", logo: logo_merrick, webpage: "https://www.merrick.com", style: styles.merrick },
];

const goldSponsors: SponsorProps[] = [
  { name: "ACE Hardware", logo: logo_ace, description: "Buckley Square", webpage: "https://www.acehardware.com/store-details/17489" },
  { name: "BAE Systems", logo: logo_bae, webpage: "https://www.baesystems.com/en-us/home" },
  { name: "Medtronic", logo: logo_medtronic, webpage: "https://www.medtronic.com" },
  { name: "TE Connectivity", logo: logo_te_connectivity, webpage: "https://www.te.com/" },
  { name: "Young Engineers Association", logo: logo_yea, webpage: "https://www.youngengineers.us/" },
];

const silverSponsors: SponsorProps[] = [
  { name: "Campos EPC", logo: logo_campos, webpage: "https://www.camposepc.com/"},
  { name: "Fastenal", logo: logo_fastenal, webpage: "https://www.fastenal.com" },
  { name: "United Launch Alliance", logo: logo_ula, webpage: "https://www.ulalaunch.com/"},
];

const bronzeSponsors: SponsorProps[] = [
  { name: "Fabworks", logo: logo_fabworks, webpage: "https://www.fabworks.com/" },
  { name: "Kokoro", logo: logo_kokoro, webpage: "https://www.kokororestaurants.com/" },
  { name: "Online Metals", logo: logo_onlinemetals, webpage: "https://www.onlinemetals.com/" },
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
