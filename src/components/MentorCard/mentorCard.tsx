import React, { Component, MouseEventHandler } from "react";
import { Card } from "react-bootstrap";
import type { MentorProps } from "../../state/mentors/types";
import ReactCardFlip from "react-card-flip";

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

class MentorCard extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: MouseEventHandler<HTMLButtonElement>) {
    event.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div className={cardStyle} onClick={this.handleClick}>
          <a className={imageContainerStyle}>
            <Card.Img
              variant="top"
              src={this.props.mentor.image}
              className={imageStyle}
            />
          </a>

          <Card.Body className={cardBodyStyle}>
            <Card.Title>{this.props.mentor.name}</Card.Title>
            <Card.Text>{this.props.mentor.role}</Card.Text>
          </Card.Body>
        </div>

        <div className={cardStyle} onClick={this.handleClick}>

          <Card.Body className={cardBodyStyle}>
            <Card.Title>{this.props.mentor.name}</Card.Title>
            <Card.Text>{this.props.mentor.role}</Card.Text>
            <Card.Text>Mentoring Since {this.props.mentor.since}</Card.Text>
            <Card.Text>{this.props.mentor.bio}</Card.Text>
          </Card.Body>
        </div>
      </ReactCardFlip>
    );
  }
}

export { MentorCard };
