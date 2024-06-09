import React from "react";
import { Accordion } from "react-bootstrap";
import { HeadFC } from "gatsby";

import { BasePage, SEO, HistoryCard, type HistoryCardProps } from "../components";

import robot_2023_0 from "../images/2023photos/23regionalShowRobot0.jpg";
import robot_2023_1 from "../images/2023photos/23regionalShowRobot1.jpg";
import robot_2023_2 from "../images/2023photos/23regionalShowRobot2.jpg";
import robot_2023_3 from "../images/2023photos/23regionalShowRobot3.jpg";

import robot_2020_0 from "../images/2020photos/2020scrim0.jpg";
import robot_2020_1 from "../images/2020photos/2020scrim1.jpg";

import robot_2019_0 from "../images/2019photos/2019regional0.jpg";
import robot_2019_1 from "../images/2019photos/2019regional1.jpg";

import robot_2018_0 from "../images/2018photos/2018regional0.jpg";
import robot_2018_1 from "../images/2018photos/2018regional1.jpg";
import robot_2018_2 from "../images/2018photos/2018regional2.jpg";
import robot_2018_3 from "../images/2018photos/2018regional3.jpg";

import robot_2017_0 from "../images/2017photos/2017regional0.jpg";
import robot_2017_1 from "../images/2017photos/2017regional1.jpg";
import robot_2017_2 from "../images/2017photos/2017regional2.jpg";
import robot_2017_3 from "../images/2017photos/2017regional3.jpg";

import robot_2016_0 from "../images/2016photos/2016regional0.jpg";
import robot_2016_1 from "../images/2016photos/2016regional1.jpg";
import robot_2016_2 from "../images/2016photos/2016regional2.jpg";
import robot_2016_3 from "../images/2016photos/2016regional3.jpg";

import robot_2013_0 from "../images/2013photos/2013regional0.jpg";
import robot_2013_1 from "../images/2013photos/2013regional1.jpg";

import robot_2012_0 from "../images/2012photos/2012regional0.jpg";
import robot_2012_1 from "../images/2012photos/2012regional1.jpg";

import robot_2011_0 from "../images/2011photos/2011shop0.jpg";

const title = "History";

const data: HistoryCardProps[] = [
  {
    year: "2024",
    name: "Crescendo",
    blurb: "The team built \"Note Fury\", a robot that accomplished numerous BlazerBot firsts: the team's first swerve drive, the team's first full day of practice matches, the team's first game pieces picked up off of the floor, and the team's first successful climb! The team faught hard at the Colorado Regional, replacing every wheel at least once and rebuilding the bumpers between matches, before finishing 47th out of 49 teams. Come listen to (and watch) Note Fury at the Kendrick Castillo Memorial Tournament in October!",
    images: [],
  },
  {
    year: "2023",
    name: "Charged Up",
    blurb:
      "The team re-formed with a group of students who had never participated in FRC before. In the 2022 off-season, the team modified the 2020 robot to compete in the Kendrick Castillo Memorial Tournament, winning the event as a member of the #1 alliance. During the 2023 season, the team competed at the Colorado Regional, finishing 6-6-0 and placing 25th out of 43 teams. At the 2023 Kendrick Castillo Memorial Tournament, the BlazerBots finished 37th out of 41 teams.",
    images: [robot_2023_0, robot_2023_1, robot_2023_2, robot_2023_3],
  },
  {
    year: "2022",
    name: "Rapid React",
    blurb:
      "In 2022, the BlazerBots disbanded as a result of COVID, a majority of the team graduating, and declining student interest.",
    images: [],
    showTBA: false,
  },
  {
    year: "2021",
    name: "Infinite Recharge (2021)",
    blurb: "The team struggled to engage with the at-home version of the Infinite Recharge game but continued to improve the 2020 robot.",
    images: [],
  },
  {
    year: "2020",
    name: "Infinite Recharge",
    blurb: "The team built an excellent robot which never got to play the game it was designed for as the 2020 season was canceled a week before the Colorado Regional.",
    images: [robot_2020_0, robot_2020_1],
  },
  {
    year: "2019",
    name: "Destination: Deep Space",
    blurb: "The team built a speedy robot to transport game pieces around the field. We competed at the Colorado Regional, finishing with a record of 6-4-0 and rank of 20th out of 53 teams.",
    images: [robot_2019_0, robot_2019_1],
  },
  {
    year: "2018",
    name: "FIRST Power Up",
    blurb: "In 2018, we competed at the Colorado Regional, finishing with a record of 6-5-0 and ranked 23rd out of 52 teams.",
    images: [robot_2018_0, robot_2018_1, robot_2018_2, robot_2018_3],
  },
  {
    year: "2017",
    name: "FIRST Steamworks",
    blurb: "In 2017, we competed at the Colorado Regional, finishing with a record of 0-11-0 and ranked 48th out of 48 teams.",
    images: [robot_2017_0, robot_2017_1, robot_2017_2, robot_2017_3],
  },
  {
    year: "2016",
    name: "FIRST Stronghold",
    blurb: "In 2016, we built a robot focused on traversing the games defenses with a unique \"butterfly\" drive train. We competed at the Colorado Regional, although we missed the practice day due to a massive snowstorm, which also prevented us from attaching our manipulator arm. Despite those challenges, we finished with a record of 6-5-0, ranked 24th out of 48 teams.",
    images: [robot_2016_0, robot_2016_1, robot_2016_2, robot_2016_3],
  },
  {
    year: "2015",
    name: "Recycle Rush",
    blurb: "In 2015, we built a tote-focused robot. We competed at the Colorado Regional and finished ranked 41st out of 51 teams.",
    images: [], // Could not find any images on team's google account
  },
  {
    year: "2014",
    name: "Aerial Assist",
    blurb: "In 2014, we built a catapult based robot that had trouble hitting its mark. We competed at the Colorado Regional and finished with a record of 2-9, ranked 51st out of 52 teams.",
    images: [], // Could not find any images on team's google account
  },
  {
    year: "2013",
    name: "Ultimate Ascent",
    blurb: "In 2013, we built a short distance frisbee shooter for Ultimate Ascent and competed at the Colorado Regional. There, we finished with a record of 8-5, ranked 9th out of 48 teams. This was enough for us to captain the #6 alliance, for which we picked teams 1619 and 4550 as our partners. Our alliance was eliminated in the quarterfinals. This was also our first year in pink!",
    images: [robot_2013_0, robot_2013_1],
  },
  {
    year: "2012",
    name: "Rebound Rumble",
    blurb: "In 2012, the BlazerBots competed at the Colorado Regional. We finished qualification matches with a record of 2-5-4 and a rank of 29th out of 48, but attracted the attention of the #1 seed, team 2996 and were picked for the #1 alliance along with team 399. Together with our alliance partners we won the regional and a trip to the FIRST world championship in St. Louis. There, we competed on the Curie Field and finished with a record of 3-6, ranking 99th out of 100 on the Curie.",
    images: [robot_2012_0, robot_2012_1],
  },
  {
    year: "2011",
    name: "Logo Motion",
    blurb: "The BlazerBots' inaugural year! We competed at the Colorado Regional, finishing with a record of 3-4-3 and a rank of 23rd out of 45 teams.",
    images: [robot_2011_0],
  },
];

const page = () => (
  <BasePage pageName={title}>
    <p>
      The BlazerBots, based at Overland High School in Aurora, Colorado, started
      competing at the Colorado Regional in 2011. We have had mixed success over
      the past 12 years. Our highlights include winning the Colorado Regional in
      2012 and captaining an alliance in 2013. The team struggled after COVID
      and skipped the 2022 season, before being revived with entirely new
      students for the 2023 season. In our first season after revival, and as a
      “rookie-in-all-but-number” team, we placed 25th at the Colorado Regional.
      We currently have approximately 12 returning students from a variety of
      backgrounds, as well as numerous mentors, many of whom are FRC alums.
      {/* From Sponsorship Packet */}
    </p>
    <Accordion alwaysOpen>
      {data.map((value) => (
        <HistoryCard {...value} key={value.year}></HistoryCard>
      ))}
    </Accordion>
  </BasePage>
);

export default page;

export const Head: HeadFC = () => <SEO subTitle={title} />;
