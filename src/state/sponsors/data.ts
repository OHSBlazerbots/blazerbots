import { makeTier, type SponsorsState, type SponsorProps } from "./types";

import logo_ccsd from "../../images/logo_ccsd.png";
import logo_comcast from "../../images/logo_comcast.png";
import logo_haas from "../../images/logo_haas.png";
import logo_ccsf from "../../images/logo_ccsf.png";
import logo_angelbotics from "../../images/logo_angelbotics.svg";
import logo_ace from "../../images/logo_ace.png";
import logo_fastenal from "../../images/logo_fastenal.png";
import logo_brothers from "../../images/logo_brothers.svg";
import logo_harbor_freight from "../../images/logo_harbor_freight.svg";
import logo_kokoro from "../../images/logo_kokoro.jpg";
import logo_medtronic from "../../images/logo_medtronic.png";
import logo_revolve_reclaimed from "../../images/logo_revolve_reclaimed.jpg";
import logo_abacus from "../../images/logo_abacus.png";
import logo_sierrafp from "../../images/logo_sierrafp.svg";


//
// Actual data for all of our sponsors
//
const styles = {
  angelbots: { background: "red" },
  ccsf: { background: "rgb(8, 97, 136)" },
};

const pinkSponsors: SponsorProps[] = [
  { name: "Cherry Creek School District", logo: logo_ccsd, webpage: "https://www.cherrycreekschools.org/" },
  { name: "Comcast", logo: logo_comcast, webpage: "https://corporate.comcast.com/" },
  { name: "Gene Haas Foundation", logo: logo_haas, webpage: "https://ghaasfoundation.org" },
  { name: "Medtronic", logo: logo_medtronic, webpage: "https://www.medtronic.com" },
  { name: "Cherry Creek Schools Foundation", logo: logo_ccsf, style: styles.ccsf, webpage: "https://ccsdfoundation.org/" },
  { name: "Angelbotics", logo: logo_angelbotics, style: styles.angelbots, webpage: "https://angelbotics.org/" },
  { name: "ACE Hardware", logo: logo_ace, description: "Buckley Square", webpage: "https://www.acehardware.com/store-details/17489" },
  { name: "Fastenal", logo: logo_fastenal, webpage: "https://www.fastenal.com" },
  { name: "Brothers Plumbing, Heating & Electric", logo: logo_brothers, webpage: "https://www.brothersplumbing.com/brothers-gives-back/brothers-gives-back-november-2023-overland-high-school/" },
  { name: "Abacus Cabinetry", logo: logo_abacus, webpage: "https://www.abacuscabinetry.com"},
];

const silverSponsors: SponsorProps[] = [
  { name: "Kokoro", logo: logo_kokoro, webpage: "https://www.kokororestaurants.com/" },
  { name: "Harbor Freight Tools", logo: logo_harbor_freight, webpage: "https://harborfreightgivingback.com/" },
  { name: "Revolve Reclaimed", logo: logo_revolve_reclaimed, webpage: "https://www.revolvereclaimed.com/"},
  { name: "Sierra Forest Products", logo: logo_sierrafp, webpage: "https://www.sierrafp.com/"},
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
