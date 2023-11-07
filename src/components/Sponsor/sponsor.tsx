import React from "react";
import Card from 'react-bootstrap/Card';
import {
  logo as logoStyle
} from "./sponsor.module.css"

interface SponsorProps {
  name: string;
  logo: string;
  description?: string;
  style?: React.CSSProperties;
}

const SponsorCard = ({name, logo, description, style}: SponsorProps) => (
  <>
    <Card>
      <Card.Img variant="top" src={logo} style={style} className={logoStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </>
);

export {SponsorCard, SponsorProps};
