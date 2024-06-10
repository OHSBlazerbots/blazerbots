import React from "react";
import { HeadFC } from "gatsby";
import { Col, Row } from "react-bootstrap";

import { BasePage, SEO, MentorCard } from "../components";
import { mentorData } from "../state/mentors/data";

const title = "Team Mentors";

const page = () => (
  <BasePage pageName={title}>
    <>
      <Row xs={1} md={3} className="g-4 justify-content-center">
        {mentorData.map((mentor, idx) => (
          <Col key={idx}>
            <MentorCard mentor={mentor} />
          </Col>
        ))}
      </Row>
      <br />
    </>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
