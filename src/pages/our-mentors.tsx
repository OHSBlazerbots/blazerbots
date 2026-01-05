import React from "react";
import { HeadFC } from "gatsby";
import { Col, Row } from "react-bootstrap";

import { BasePage, SEO, MentorCard } from "../components";
import { mentorData } from "../state/mentors/data";

const title = "Our Mentors";

const page = () => (
  <BasePage pageName={title}>
    <p>
      Above all else, FRC strives to be a place for students to learn and grow.
      We have long taken pride in the BlazerBots being a "student-led" team,
      where the students get to decide on their priorities year to year, but
      that doesn't mean there isn't a place for mentors. In FRC, high schoolers
      and adults work side-by-side, learning from each other (and yes, the
      adults learn just as much from the students). Mentors are professionals
      from a variety of industries and give students the opportunity to learn from
      their years of experience, while still maintaining control over their
      destiny as a team.
    </p>
    <p>
      Below are our mentors who volunteer their time to leave a lasting impact
      on the next generation of engineers, scientists and leaders.
    </p>

    <hr />
    
    <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4 justify-content-center">
      {mentorData.map((mentor, idx) => (
        <Col key={idx}>
          <MentorCard {...mentor}/>
        </Col>
      ))}
    </Row>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
