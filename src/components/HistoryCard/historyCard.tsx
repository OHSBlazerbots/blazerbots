import React from "react";
import { Accordion, Carousel } from "react-bootstrap";

import {
  title as titleStyle,
  TBAIcon as TBAIconStyle,
  iconContainer as iconContainerStyle,
} from "./historyCard.module.css";
import icon_tba from "../../images/icon_tba.png";

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

const TBALink = ({ year }: { year: string }) => {
  const address = "https://www.thebluealliance.com/team/3807/" + year;

  return (
    <div className={iconContainerStyle}>
      <a href={address} target="_blank">
        <img src={icon_tba} className={TBAIconStyle} />
      </a>
    </div>
  );
};

const HistoryCard = ({
  year,
  name,
  blurb,
  images,
  showTBA = true,
}: HistoryCardProps) => {
  return (
    <Accordion.Item eventKey={year}>
      <Accordion.Header>
        <p className={titleStyle}>
          {year}: {name}
        </p>
        {showTBA && <TBALink year={year} />}
      </Accordion.Header>
      <Accordion.Body>
        <p>{blurb}</p>
        {images.length > 0 && (
          <Carousel>{images.map(makeCarouselItem)}</Carousel>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export { HistoryCard, type HistoryCardProps };
