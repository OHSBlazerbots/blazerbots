import React from "react";
import { Accordion, Carousel } from "react-bootstrap";

import { TheBlueAllianceIcon } from "../Icon";
import {
  title as titleStyle,
  iconContainer as iconContainerStyle,
  carouselItem as carouselItemStyle,
} from "./historyCard.module.css";

interface HistoryCardProps {
  year: string;
  name: string;
  blurb: string;
  images: string[];
  showTBA?: boolean;
}

const makeCarouselItem = (image: string, index: number) => (
  <Carousel.Item key={index}>
    <img src={image} className={carouselItemStyle} />
  </Carousel.Item>
);

const TBALink = ({ year }: { year: string }) => (
  <div className={iconContainerStyle}>
    <TheBlueAllianceIcon year={year} />
  </div>
);

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
          <Carousel variant="dark">{images.map(makeCarouselItem)}</Carousel>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export { HistoryCard, type HistoryCardProps };
