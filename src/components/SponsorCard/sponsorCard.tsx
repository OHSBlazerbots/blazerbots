import React from "react";
import Card from "react-bootstrap/Card";
import type { SponsorProps } from "../../state/sponsors/types";

import {
  logo as logoDefaultStyle,
  logoContainer as logoContainerStyle,
  card as cardStyle,
  cardBody as cardBodyStyle,
} from "./sponsorCard.module.css";

const SponsorCard = (
  { name, logo, description, style }: SponsorProps,
  showBody: boolean = true,
  logoAspectRatio?: string
) => {
  const logoStyle = logoAspectRatio
    ? { ...logoDefaultStyle, aspectRatio: logoAspectRatio }
    : logoDefaultStyle;

  return (
    <>
      <Card className={cardStyle}>
        <div className={logoContainerStyle}>
          <Card.Img
            variant="top"
            src={logo}
            style={style}
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
