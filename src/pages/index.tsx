import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import BasePage from "../components/BasePage/BasePage";
import Carousel from "react-bootstrap/Carousel";

import pic1 from "../images/23photos/23regionalCheer.jpg";
import pic2 from "../images/23photos/23regionalTeam.jpg";
import pic3 from "../images/23photos/23regionalRobot.jpg";

const carouselImages = [pic1, pic2, pic3];

const makeCarouselItem = (imageUrl: string, index: number) => (
  <Carousel.Item key={index}>
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={"Slide number" + (index + 1)}
    />
  </Carousel.Item>
);

const page = () => (
  <BasePage pageName="Home">
    <Carousel>{carouselImages.map(makeCarouselItem)}</Carousel>
    Welcome to the home page!
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <title>Home Page</title>;
