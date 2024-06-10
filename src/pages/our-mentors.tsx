import React from "react";
import { HeadFC } from "gatsby";
import { Col, Row } from "react-bootstrap";

import { BasePage, SEO, MentorCard } from "../components";
import { mentorData } from "../state/mentors/data";

const title = "Team Mentors";

const styles = {
  card: {
    border: '1px solid #eeeeee',
    borderRadius: '3px',
    padding: '15px',
    width: '250px'
  },
  image: {
    height: '200px',
    width: '250px'
  }
};

const page = () => (
  <BasePage pageName={title}>
    <>
      <Row xs={1} md={3} className="g-4 justify-content-center">
        {mentorData.map((mentor, idx) => (
          <Col key={idx}>
            <MentorCard mentor={mentor} styles={styles} />
          </Col>
        ))}
      </Row>
      <br />
    </>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
