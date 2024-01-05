import React from "react";

import { roundedIcon as roundedIconStyle } from "./icon.module.css";
import icon_tba from "../../images/icon_tba.png";
import { stopClickPropagation } from "../../utils/events";

const TheBlueAllianceIcon = ({ year }: { year?: string }) => {
  const suffix = year ? year : "";
  const address = "https://www.thebluealliance.com/team/3807/" + suffix;

  return (
    <a href={address} target="_blank" onClick={stopClickPropagation}>
      <img src={icon_tba} className={roundedIconStyle} />
    </a>
  );
};

export { TheBlueAllianceIcon };
