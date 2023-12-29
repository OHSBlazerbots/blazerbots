import React from "react";
import Card from "react-bootstrap/Card";

import {
  card as cardStyle,
} from "./historyCard.module.css";
import { Carousel } from "react-bootstrap";

import icon_tba from "../../images/icon_tba.png"

interface HistoryCardProps {
  year: String,
  name: String,
  showTBA?: boolean,
  showImages?: boolean,
  blurb: String,
  images?: any
}

const carouselItemStyle = {
  width: "30%",
};

const makeCarouselItem = (image: string, index: number) => (
  <Carousel.Item key={index}>
    <img src={image} style={carouselItemStyle} />
  </Carousel.Item>
);

const tba_icon_style = {
  'width': '25px',
  'border-radius': '50%',
  'margin-bottom': '3px'
};

const HistoryCard = ({
  year,
  name,
  showTBA = true,
  showImages = true,
  blurb,
  images = []
}: HistoryCardProps) => {

  return (
    <>
      <Card className={cardStyle}>
        <Card.Title>{year}: {name}</Card.Title>
        {showTBA ?
          <Card.Link href={"https://www.thebluealliance.com/team/3807/" + year} target="_blank"><img src={icon_tba} style={tba_icon_style} /></Card.Link>
          :
          <></>
        }
        <Card.Text>{blurb}</Card.Text>
        {showImages ?
          <Carousel>{images.map(makeCarouselItem)}</Carousel>
          :
          <></>
        }
      </Card>
    </>
  );
};

export { HistoryCard };
