import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Carousel, Col, Row } from "react-bootstrap";
import { BasePage, SponsorCard, SEO } from "../components";

import pic1 from "../images/2023photos/23regionalTeam.jpg";
import pic2 from "../images/2023photos/23regionalRobot.jpg";
import pic3 from "../images/2023photos/23regionalCheer.jpg";
import { sponsorsData } from "../state/sponsors/data";

const carouselStyle = {
  marginBottom: "24px",
};

const captionStyle = {
  background: "rgba(0,0,0,0.5)",
  color: "white",
};

const carouselCards = [
  { image: pic1, title: "Team Photo" },
  { image: pic2, title: "2023 Charged-Up Robot" },
  { image: pic3, title: "BlazerBots 3807" },
];

interface CarouselCardProps {
  image: string;
  title: string;
}

const makeCarouselItem = (
  { image, title }: CarouselCardProps,
  index: number
) => (
  <Carousel.Item key={index}>
    <Carousel.Caption>
      <h5 style={captionStyle}>{title}</h5>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src={image}
      alt={"Slide number" + (index + 1)}
    />
  </Carousel.Item>
);

const mainContainerStyle = {
  width: "80%",
  margin: "auto",
}

const AboutUsCard = (
  <Card>
    <Card.Body>
      <Card.Title>About Us</Card.Title>
      The BlazerBots, based at Overland High School in Aurora, Colorado are a
      high school team that provides a diverse, inclusive and fun learning
      environment for all of its members. The BlazerBots participate in FIRST
      Robotics Competition (FRC), and started competing at the Colorado Regional
      in 2011!
    </Card.Body>
  </Card>
);

const WhatIsFIRSTCard = (
  <Card>
    <Card.Body>
      <Card.Title>What is FIRST?</Card.Title>
      <Card.Text>
        FIRST Robotics Competition (FRC), is an international competition that
        challenges students to create a competitive 115 pound robot in
        approximately 10 weeks every spring! Students learn critical STEM
        skills, collaboration, and most importantly, have the hardest fun
        they'll ever have! In the words of FIRST founder Dean Kamen,{" "}
        <i>“We don't use kids to build robots, we use robots to build kids.”</i>{" "}
        In that vein, our mission is to leave a legacy with every step we take
        and every robot we make.
      </Card.Text>
    </Card.Body>
  </Card>
);


const SponsorsBlock = () => {
  const allSponsors = sponsorsData.tiers.map(t => t.items).flat()
  return (
    <>
      <h2>Thank you to our sponsors!</h2>
      Don't see your logo here? <Link to="/sponsor-us" >Click here to learn how to add it!</Link>
      <br />
      <br />
      <Row xs={1} sm={2} md={2} lg={4} className="g-4 justify-content-center">
      {allSponsors.map((item, idx) => (
            <Col key={idx}>
              <SponsorCard {...{sponsor: item, showBody: false, logoAspectRatio: "2/1"}} />
            </Col>
          ))}
      </Row>
    </>
  )
}

const page = () => (
  <BasePage articleWidth="100%">
    <Carousel style={carouselStyle}>
      {carouselCards.map(makeCarouselItem)}
    </Carousel>
    <div style={mainContainerStyle}>
      <Row xs={1} md={2} className="g-4">
        <Col>{AboutUsCard}</Col>
        <Col>{WhatIsFIRSTCard}</Col>
      </Row>
      <br />
      <SponsorsBlock />
    </div>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO />;
