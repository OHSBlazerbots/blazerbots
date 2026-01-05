import React from "react";
import { HeadFC, Link } from "gatsby";

import { BasePage, SEO } from "../components";
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";

const title = "About Us";

import team_picture from "../images/2023photos/23regionalTeam.jpg";

const MissionStatementCard = (
  <Card>
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text>
        The Overland BlazerBots seek to provide a diverse, inclusive and fun
        learning environment for all of its members through competitive
        robotics. Students learn business, design, fabrication, programming and
        most importantly, collaboration. We plan to develop a competitive and
        spirited team to educate and inspire students far into the future.
        <br />
        <strong>
          Our mission is to leave a legacy with every step we take and every
          robot we make.
        </strong>
      </Card.Text>
    </Card.Body>
  </Card>
);

const WhoAreWeCard = (
  <Card>
    <Card.Body>
      <Card.Title>Who Are We?</Card.Title>
      <Row sm={1} md={2} className="g-4">
        <Col md={8}>
          We are the Overland BlazerBots, a high school robotics team working
          out of{" "}
          <Link to="https://overland.cherrycreekschools.org/" target="_blank">
            Overland High School
          </Link>{" "}
          in Aurora, Colorado. The team launched in 2011 and competes annually in FIRST
          Robotics Competition (FRC), an international competition that
          challenges students to create a competitive 115 pound robot in
          approximately 10 weeks every spring. Over the course of a season, our
          students learn critical STEM skills, collaboration, leadership, and
          most importantly, have the hardest fun they'll ever have!
          <br />
          Every January, FIRST releases a new game, played by teams around the world.
          Games vary widely and have included tasks from shooting
          foam basketballs to stacking totes and from launching foam rings to placing PVC pipes on a structure.
          <br />
          Students are challenged to strategize, design, build, and program a robot to play the game, all in about 10 weeks.
          They must collaborate and closely communicate with each other to ensure that the robot is ready for competition in time.
        </Col>
        <Col md={4}>
          <Card.Img src={team_picture} alt="TEST" />
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const WhatIsFIRSTCard = (
  <Card>
    <Card.Body>
      <Card.Title>What are FIRST and FRC?</Card.Title>

      <Row sm={1} md={2} className="g-4">
        <Col md={5}>
          <br />
          <Card.Img
            src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/first-horz-rgb.png"
            alt="FIRST Logo"
          />
        </Col>
        <Col md={7}>
          FIRST Robotics Competition (FRC), is an international competition that
          challenges students to create a competitive 115 pound robot in
          approximately 10 weeks every spring! Students learn critical STEM
          skills, collaboration, and most importantly, have the hardest fun
          they'll ever have! In the words of FIRST founder Dean Kamen, "
          <i>We don't use kids to build robots, we use robots to build kids.</i>
          "
          <br />
          <br />
          For Inspiration and Recognition of Science and Technology (FIRST) is
          the parent organization of FRC. In addition to FRC, FIRST runs other
          robotics programs: FIRST Lego League (FLL) for elementary through
          middle school students and FIRST Tech Challenge (FTC) for middle
          school through high school students (with classroom sized robots).
        </Col>
      </Row>
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
        <i>FIRST</i> and foremost, we provide students with skills that
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
        <Col>{WhoAreWeCard}</Col>
        <Col>{WhatIsFIRSTCard}</Col>
      </Row>
      <br />
      <Row xs={1} md={2} className="g-4">
        <Col>{HistoryCard}</Col>
        <Col>{SkillsCard}</Col>
      </Row>
    </Container>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
