import React from "react";
import Card from "react-bootstrap/Card";
import type { SponsorProps } from "../../state/sponsors/types";

import {
  logo as logoStyle,
  logoContainer as logoContainerStyle,
  card as cardStyle,
  cardBody as cardBodyStyle,
} from "./sponsorCard.module.css";

interface SponsorCardProps {
  sponsor: SponsorProps;
  showBody?: boolean;
  logoAspectRatio?: string;
}

const SponsorCard = ({
  sponsor: { name, logo, description, style },
  showBody = true,
  logoAspectRatio,
}: SponsorCardProps) => {
  const logoStyleOverrides = logoAspectRatio
    ? { ...style, aspectRatio: logoAspectRatio }
    : style;

  return (
    <>
      <Card className={cardStyle}>
        <div className={logoContainerStyle}>
          <Card.Img
            variant="top"
            src={logo}
            style={logoStyleOverrides}
            className={logoStyle}
          />
        </div>

        {showBody ? (
          <Card.Body className={cardBodyStyle}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        ) : (
          <></>
        )}
      </Card>
    </>
  );
};

export { SponsorCard };
