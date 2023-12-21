import React from "react";
import Card from 'react-bootstrap/Card';
import { SponsorProps } from "../../state/sponsors/types";

import {
  logo as logoStyle,
  logoContainer as logoContainerStyle,
  card as cardStyle,
  cardBody as cardBodyStyle,
} from "./sponsor.module.css"


const SponsorCard = ({name, logo, description, style}: SponsorProps) => (
  <>
    <Card className={cardStyle}>
      <div className={logoContainerStyle} >
        <Card.Img variant="top" src={logo} style={style} className={logoStyle}/>
      </div>
      
      <Card.Body className={cardBodyStyle}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </>
);

export { SponsorCard };
