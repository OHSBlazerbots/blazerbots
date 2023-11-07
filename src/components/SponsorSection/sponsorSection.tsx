import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SponsorCard, SponsorProps } from "../../components/Sponsor/sponsor";


interface SponsorSectionProps {
    title: string;
    color: string;
    items: SponsorProps[];
  }
  
  const SponsorSection = ({ title, color, items }: SponsorSectionProps) => (
    <>
      <header style={{color}}>
        <h2>{title} Tier</h2>
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
