import React from "react";
import { Col, Row } from 'react-bootstrap';
import { SponsorCard } from "..";
import type { SponsorTier } from "../../state/sponsors/types";

  const SponsorSection = ({ title, color, items }: SponsorTier) => (
    <>
      <header style={{ color }}>
        <h1>{title} Tier</h1>
      </header>
      <Row xs={1} md={3} className="g-4 justify-content-center">
        {items.map((val, idx) => (
          <Col key={idx}>
            <SponsorCard {...{sponsor: val}}/>
          </Col>
        ))}
      </Row>
      <br/>
    </>
  );

export { SponsorSection };
