import React, { MouseEvent, useState } from "react";
import { Card } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { MentorProps } from "../../state/mentors/types";

import {
  image as imageStyle,
  card as cardStyle,
  cardBack as cardBackStyle,
  cardFront as cardFrontStyle,
  cardBody as cardBodyStyle,
} from "./mentorCard.module.css";

const MentorCard = ({ name, since, image, role, bio }: MentorProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  function handleClick(event: MouseEvent) {
    event.preventDefault();
    setIsFlipped((status) => !status);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className={`${cardStyle} ${cardFrontStyle}`} onClick={handleClick}>
        <Card.Img variant="top" src={image} className={imageStyle} />
      </div>

      <div className={`${cardStyle} ${cardBackStyle}`} onClick={handleClick}>
        <Card.Body className={cardBodyStyle}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {role}
            <br />
            Mentoring Since {since}
          </Card.Text>
          <Card.Text>{bio}</Card.Text>
        </Card.Body>
      </div>
    </ReactCardFlip>
  );
};

export { MentorCard };
