import React from "react";
import BasePage from "../components/BasePage/BasePage";

import Carousel from "react-bootstrap/Carousel";

import robot_2023_0 from "../images/23photos/23regionalShowRobot0.jpg";
import robot_2023_1 from "../images/23photos/23regionalShowRobot1.jpg";
import robot_2023_2 from "../images/23photos/23regionalShowRobot2.jpg";
import robot_2023_3 from "../images/23photos/23regionalShowRobot3.jpg";

const carouselItemStyle = {
  width: "100%"
}

const makeCarouselItem = (image: string, index: number) => (
  <Carousel.Item key={index}>
    <img src={image} style={carouselItemStyle} />
  </Carousel.Item>
);

const images2023 = [robot_2023_0, robot_2023_1, robot_2023_2, robot_2023_3];

const page = () => (
  <BasePage pageName="History">
    Welcome to the history page!
    <h2>2023 - Charged Up! ⚡</h2>
    <Carousel>{images2023.map(makeCarouselItem)}</Carousel>
  </BasePage>
);

export default page;
