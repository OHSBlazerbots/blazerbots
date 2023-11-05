import React from "react";
import {
  logo as logoStyle
} from "./sponsor.module.css"

interface SponsorProps {
    name: string;
    logo: string;
    style?: React.CSSProperties;
  }

const Sponsor = ({ name, logo, style }: SponsorProps) => (
  <>
    <div className={logoStyle} >
      <img src={logo} width="40%" style={style}>
      </img>
      <br/>
    </div>
  </>
);

export default Sponsor;
