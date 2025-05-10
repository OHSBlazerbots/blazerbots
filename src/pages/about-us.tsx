import React from "react";
import { HeadFC, Link } from "gatsby";

import { BasePage, SEO } from "../components";
import { Card, Row, Col, Container } from "react-bootstrap";

const title = "About Us";

const mainContainerStyle = {
  // width: "80%",
  // margin: "auto",
};

const MissionStatementCard = (
  <Card>
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text>
        The Overland BlazerBots seek to provide a diverse, inclusive and fun
        learning environment for all of its members through competitive
        robotics. Students learn business, design, fabrication, programming and
        most importantly, collaboration. We plan to develop a competitive and
        spirited team to educate and inspire students far into the future. Our
        mission is to leave a legacy with every step we take and every robot we
        make.
      </Card.Text>
    </Card.Body>
  </Card>
);

const WhoAreWeCard = (
  <Card>
    <Card.Body>
      <Card.Title>Who Are We?</Card.Title>
      We are the Overland BlazerBots, a high school robotics team working out of{" "}
      <Link to="https://overland.cherrycreekschools.org/" target="_blank">
        Overland High School
      </Link>{" "}
      in Aurora, Colorado. Founded in 2011, we compete annually in the FIRST
      Robotics Competition (FRC), an international competition that challenges
      students to create a competitive 115 pound robot in approximately 10 weeks
      every spring. Over the course of a season, our students learn critical
      STEM skills, collaboration, leadership, and most importantly, have the
      hardest fun they'll ever have!
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
        they'll ever have! In the words of FIRST founder Dean Kamen, "
        <i>We don't use kids to build robots, we use robots to build kids.</i>"{" "}
        In that vein, our mission is to leave a legacy with every step we take
        and every robot we make.
      </Card.Text>
    </Card.Body>
  </Card>
);

const HistoryCard = (
  <Card>
    <Card.Body>
      <Card.Title>Our History</Card.Title>
      <Card.Text>
        The BlazerBots started competing at the Colorado Regional in 2011. Our
        highlights include winning the 2012 Colorado Regional and captaining the
        6th seeded alliance at the 2013 Colorado Regional. We also won the 2022
        Kendrick Castillo Memorial Tournament off-season event. For a full
        history of our team, check out the <Link to="/history">history</Link>{" "}
        page.
      </Card.Text>
    </Card.Body>
  </Card>
);

const SkillsCard = (
  <Card>
    <Card.Body>
      <Card.Title>Imparting Critical Skills</Card.Title>
      <Card.Text>
        <i>FIRST</i> and foremost, we provide students with skills to that
        prepare them for future careers in STEM and more. Through building the
        robot itself and through interactions with their teammates, members
        learn about:
        <br />
        Engineering complex systems
        <br />
        Programming
        <br />
        Computer Aided Design (CAD)
        <br />
        Manufacturing
        <br />
        Electronics
        <br />
        Time Management
        <br />
        Leadership
        <br />
        Working in a collaborative environment
      </Card.Text>
    </Card.Body>
  </Card>
);

const page = () => (
  <BasePage pageName={title}>
    <Container fluid="md">
      <Row xs={1} md={1} className="g-4">
        <Col>{MissionStatementCard}</Col>
      </Row>
      <br />
      <Row xs={1} md={2} className="g-4">
        <Col>{WhoAreWeCard}</Col>
        <Col>{WhatIsFIRSTCard}</Col>
        <Col>{HistoryCard}</Col>
        <Col>{SkillsCard}</Col>
      </Row>
      <br />
    </Container>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
