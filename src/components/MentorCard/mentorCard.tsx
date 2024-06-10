import React from "react";
import { Card } from "react-bootstrap";
import type { MentorProps } from "../../state/mentors/types";

import {
  image as imageStyle,
  imageContainer as imageContainerStyle,
  card as cardStyle,
  cardBody as cardBodyStyle,
} from "./mentorCard.module.css";

interface mentorCardProps {
  mentor: MentorProps;
  showBody?: boolean;
}

const MentorCard = ({
  mentor: { name, since, role, image, description, style },
  showBody = true,
}: mentorCardProps) => {
  const imageStyleOverrides = style;

  return (
    <>
      <Card className={cardStyle}>
      <a className={imageContainerStyle}>
          <Card.Img
            variant="top"
            src={image}
            style={imageStyleOverrides}
            className={imageStyle}
          />
        </a>

        {showBody ? (
          <Card.Body className={cardBodyStyle}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Since {since}</Card.Text>
            <Card.Text>{role}</Card.Text>
          </Card.Body>
        ) : (
          <></>
        )}
      </Card>
    </>
  );
};

export { MentorCard };
