import React from "react";
import { Card, Carousel } from "react-bootstrap";

import {
  card as cardStyle,
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

const tba_icon_style = {
  width: "25px",
  borderRadius: "50%",
  marginBottom: "3px",
};

const TBALink = ({ year }: { year: string }) => {
  const address = "https://www.thebluealliance.com/team/3807/" + year;

  return (
    <Card.Link href={address} target="_blank">
      <img src={icon_tba} style={tba_icon_style} />
    </Card.Link>
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
    <>
      <Card className={cardStyle}>
        <Card.Title>
          {year}: {name}
          {showTBA && (
            <>
              {" "}
              <TBALink year={year} />
            </>
          )}
        </Card.Title>

        <Card.Text>{blurb}</Card.Text>
        {images.length > 0 && (
          <Carousel>{images.map(makeCarouselItem)}</Carousel>
        )}
      </Card>
    </>
  );
};

export { HistoryCard, type HistoryCardProps };
