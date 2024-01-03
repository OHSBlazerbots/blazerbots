import React from "react";
import Card from "react-bootstrap/Card";

import {
  card as cardStyle,
} from "./historyCard.module.css";
import { Carousel } from "react-bootstrap";

import icon_tba from "../../images/icon_tba.png"

interface HistoryCardProps {
  year: string;
  name: string;
  blurb: string;
  images: string[];
  showTBA?: boolean;
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
  width: "25px",
  borderRadius: "50%",
  marginBottom: "3px",
};

const HistoryCard = ({
  year,
  name,
  blurb,
  images,
  showTBA = true,
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
        {images.length > 0 ?
          <Carousel>{images.map(makeCarouselItem)}</Carousel>
          :
          <></>
        }
      </Card>
    </>
  );
};

export { HistoryCard, type HistoryCardProps };
