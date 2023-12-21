import { SponsorTiers } from "../../components/constants";

//
// Data structure definitions
//
interface SponsorProps {
  name: string;
  logo: string;
  description?: string;
  style?: React.CSSProperties;
}

interface SponsorTierProps {
  title: keyof typeof SponsorTiers;
  items: SponsorProps[];
}

interface SponsorTier extends SponsorTierProps {
  color: string;
}

interface SponsorsState {
  tiers: SponsorTier[];
}

// Builder function for tiers
const makeTier = (props: SponsorTierProps) => ({
  ...props,
  color: SponsorTiers[props.title].color
})

export { makeTier }
export type { SponsorTier, SponsorProps, SponsorsState }
