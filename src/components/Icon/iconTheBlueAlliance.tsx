import React from "react";

import { roundedIcon as roundedIconStyle } from "./icon.module.css";
import icon_tba from "../../images/icon_tba.png";
import { stopClickPropagation } from "../../utils/events";

interface TheBlueAllianceIconProps {
  year?: string;
  style?: React.CSSProperties;
}

const TheBlueAllianceIcon = ({ year, style }: TheBlueAllianceIconProps) => {
  const suffix = year ? year : "";
  const address = "https://www.thebluealliance.com/team/3807/" + suffix;

  return (
    <a href={address} target="_blank" onClick={stopClickPropagation}>
      <img
        src={icon_tba}
        className={roundedIconStyle}
        style={style}
        alt="TheBlueAlliance"
      />
    </a>
  );
};

export { TheBlueAllianceIcon };
