import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SponsorCard } from "../../components/SponsorCard/sponsorCard";
import type { SponsorTier } from "../../state/sponsors/types";

  const SponsorSection = ({ title, color, items }: SponsorTier) => (
    <>
      <header style={{ color }}>
        <h1>{title} Tier</h1>
      </header>
      <Row xs={1} md={3} className="g-4 justify-content-center">
        {items.map((val, idx) => (
          <Col key={idx}>
            <SponsorCard {...val}/>
          </Col>
        ))}
      </Row>
      <br/>
    </>
  );

export default SponsorSection;
