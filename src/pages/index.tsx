import * as React from "react";
import { Link, type HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Carousel, Col, Row } from "react-bootstrap";
import { BasePage, SponsorCard, SEO, DonationForm } from "../components";

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
};

const mainBannerStyle = {
  background: "#282828",
  color: "white",
  padding: "52px 24px",
  marginBottom: "32px",
};

const actionButtonStyle1 = {
  borderRadius: "999px",
  padding: "0.75rem 1.25rem",
  fontWeight: 700,
  textDecoration: "none",
  border: "1px solid #FF007F",
  color: "white",
  background: "#FF007F",
};

const actionButtonStyle2 = {
  borderRadius: "999px",
  padding: "0.75rem 1.25rem",
  fontWeight: 700,
  textDecoration: "none",
  border: "1px solid #FF007F",
  color: "#FF007F",
  background: "transparent",
};

const AboutUsCard = (
  <Card>
    <Card.Body>
      <Card.Title>About Us</Card.Title>
      <p>
        The BlazerBots, based at Overland High School in Aurora, Colorado are a
        high school team that provides a diverse, inclusive and fun learning
        environment for all of its members. The BlazerBots participate in FIRST
        Robotics Competition (FRC), and started competing at the Colorado Regional
        in 2011!
      </p>

      <Link
        to="/about-us"
        className="btn"
        style={{ ...actionButtonStyle1 }}
      >
        Meet the Team
      </Link>
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
        <i>“We don't use kids to build robots, we use robots to build kids.”</i>{" "}      </Card.Text>

      <Link
        to="https://www.firstinspires.org/"
        className="btn"
        style={{ ...actionButtonStyle1 }}
      >
        Learn More
      </Link>
    </Card.Body>
  </Card>
);


const DonationBlock = () => {
  return (
    <Card>
      <h2>Support Us Via Colorado Gives!</h2>
      <DonationForm/>
    </Card>
  )
}


const SponsorsBlock = () => {
  const allSponsors = sponsorsData.tiers.map(t => t.items).flat()
  return (
    <>
      <h2>Thank you to our sponsors!</h2>
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

const MissionCard = (
  <Card>
    <Card.Body>
      <Card.Title>Mission</Card.Title>
      <p>
        Our mission is to leave a legacy with every step we take and every robot we make.
      </p>
    </Card.Body>
  </Card>
);

const GetInvolvedCard = (
  <Card>
    <Card.Body>
      <Card.Title>Get Involved</Card.Title>
      <p>
        Interested in joining the BlazerBots or supporting our team? There are many ways to get involved, from becoming a team member to volunteering or sponsoring our activities.
      </p>
      <Link
        to="mailto:info@blazerbots.org"
        className="btn"
        style={{ ...actionButtonStyle1 }}
      >
        Contact Us
      </Link>
    </Card.Body>
  </Card>
);

const MainBanner = (
  <div style={mainBannerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <p
              style={{
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Overland High School • Aurora, Colorado
            </p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Building robots. Building leaders.
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "680px",
                lineHeight: 1.7,
                opacity: 0.95,
              }}
            >
              The BlazerBots are a student-driven FIRST Robotics Competition team committed
              to creating a fun, inclusive, and empowering environment where members learn,
              innovate, and compete at the highest level.
            </p>
            <div className="d-flex flex-wrap gap-3" style={{ marginTop: "1.5rem" }}>
              <Link
                to="/about-us"
                className="btn"
                style={{ ...actionButtonStyle1 }}
              >
                Learn More
              </Link>
              <Link
                to="https://www.coloradogives.org/organization/Blazerbots"
                target="_blank"
                className="btn"
                style={{
                  ...actionButtonStyle2
                }}
              >
                Donate
              </Link>
              <Link
                to="/sponsor-us"
                className="btn"
                style={{
                  ...actionButtonStyle2
                }}
              >
                Sponsor Us
              </Link>
            </div>
          </Col>
          <Col lg={5}>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "1rem",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Carousel style={carouselStyle}>
                {carouselCards.map(makeCarouselItem)}
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </div>
);

const page = () => (
  <BasePage articleWidth="100%">
    {MainBanner}

    <div style={mainContainerStyle}>
      <Row xs={1} md={3} className="g-4">
        <Col>
          {AboutUsCard}
          <br/>
          {GetInvolvedCard}
        </Col>
        <Col>
          {MissionCard}
          <br/>
          {WhatIsFIRSTCard}
        </Col>
        <Col>
          <DonationBlock />
        </Col>
      </Row>
      <br/>
      <SponsorsBlock />
    </div>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO />;
